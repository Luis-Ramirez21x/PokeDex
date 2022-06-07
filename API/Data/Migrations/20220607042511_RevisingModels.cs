using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    public partial class RevisingModels : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pokemon_PokemonTeam_TeamId",
                table: "Pokemon");

            migrationBuilder.DropTable(
                name: "PokemonIds");

            migrationBuilder.DropTable(
                name: "PokemonTeam");

            migrationBuilder.DropIndex(
                name: "IX_Pokemon_TeamId",
                table: "Pokemon");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "68c285df-f634-460d-8c35-7ba76aa614e9");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f1f02f09-db85-4252-8ad1-798f0e435bd2");

            migrationBuilder.RenameColumn(
                name: "TeamId",
                table: "Pokemon",
                newName: "UserNum");

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Pokemon",
                type: "TEXT",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "05f5214b-a006-410e-9490-0796ca93b8b7", "bd96906e-7962-4ec9-ad49-d7dfdd44ebec", "Member", "MEMBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "31c81387-532d-4731-b174-b4b5741799ae", "06344aef-c0a2-4c86-bc89-019bde60980c", "Admin", "ADMIN" });

            migrationBuilder.CreateIndex(
                name: "IX_Pokemon_UserId",
                table: "Pokemon",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Pokemon_AspNetUsers_UserId",
                table: "Pokemon",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Pokemon_AspNetUsers_UserId",
                table: "Pokemon");

            migrationBuilder.DropIndex(
                name: "IX_Pokemon_UserId",
                table: "Pokemon");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "05f5214b-a006-410e-9490-0796ca93b8b7");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "31c81387-532d-4731-b174-b4b5741799ae");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Pokemon");

            migrationBuilder.RenameColumn(
                name: "UserNum",
                table: "Pokemon",
                newName: "TeamId");

            migrationBuilder.CreateTable(
                name: "PokemonIds",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    PokemonId = table.Column<int>(type: "INTEGER", nullable: false),
                    UserId = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PokemonIds", x => x.Id);
                    table.ForeignKey(
                        name: "FK_PokemonIds_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "PokemonTeam",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PokemonTeam", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "68c285df-f634-460d-8c35-7ba76aa614e9", "758388cc-3969-4e47-9215-141e60c3a62f", "Member", "MEMBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "f1f02f09-db85-4252-8ad1-798f0e435bd2", "2e322114-33a9-4cbb-b301-5f07a7befb24", "Admin", "ADMIN" });

            migrationBuilder.CreateIndex(
                name: "IX_Pokemon_TeamId",
                table: "Pokemon",
                column: "TeamId");

            migrationBuilder.CreateIndex(
                name: "IX_PokemonIds_UserId",
                table: "PokemonIds",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Pokemon_PokemonTeam_TeamId",
                table: "Pokemon",
                column: "TeamId",
                principalTable: "PokemonTeam",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
