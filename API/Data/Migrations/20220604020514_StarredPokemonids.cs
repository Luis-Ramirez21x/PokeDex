using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    public partial class StarredPokemonids : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "976049d9-defe-4537-bd23-59e473c6ec75");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a9dc0c83-9414-4491-b6c0-a5049d150b2a");

            migrationBuilder.AddColumn<int>(
                name: "TeamId",
                table: "Pokemon",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

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

        protected override void Down(MigrationBuilder migrationBuilder)
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

            migrationBuilder.DropColumn(
                name: "TeamId",
                table: "Pokemon");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "976049d9-defe-4537-bd23-59e473c6ec75", "2d5aecdf-6241-4ab2-adb0-6cb3c0511503", "Member", "MEMBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "a9dc0c83-9414-4491-b6c0-a5049d150b2a", "360dc779-0468-440c-9ad0-7c853275457c", "Admin", "ADMIN" });
        }
    }
}
