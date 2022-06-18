using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    public partial class Simplifying : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StarredPokemon");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "887299da-d6e1-4a5c-94af-ac6b1254adee");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "945068bb-d7dc-47fd-b6da-6ddb7be0f09c");

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Pokemon",
                type: "TEXT",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "28aa35ce-5620-44bb-81e2-3cd9db6fdd72", "fcbfd31c-5013-47b2-b74f-533999b2f56d", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "ec441a7f-3112-4c03-802b-5f22f8ac1e34", "6088a67e-4e94-4745-8252-e65462e74365", "Member", "MEMBER" });

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
                keyValue: "28aa35ce-5620-44bb-81e2-3cd9db6fdd72");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ec441a7f-3112-4c03-802b-5f22f8ac1e34");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Pokemon");

            migrationBuilder.CreateTable(
                name: "StarredPokemon",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UserId = table.Column<string>(type: "TEXT", nullable: true),
                    Name = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StarredPokemon", x => x.Id);
                    table.ForeignKey(
                        name: "FK_StarredPokemon_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id");
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "887299da-d6e1-4a5c-94af-ac6b1254adee", "ddcd4c39-e3d5-4192-abd5-db956cd977fe", "Member", "MEMBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "945068bb-d7dc-47fd-b6da-6ddb7be0f09c", "e3015118-3b4f-4584-bff6-67fb7aaa74df", "Admin", "ADMIN" });

            migrationBuilder.CreateIndex(
                name: "IX_StarredPokemon_UserId",
                table: "StarredPokemon",
                column: "UserId");
        }
    }
}
