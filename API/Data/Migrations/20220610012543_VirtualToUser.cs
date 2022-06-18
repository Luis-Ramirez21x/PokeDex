using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    public partial class VirtualToUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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
                keyValue: "26c546aa-a9c4-4aa3-b23d-6a53831b62d5");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f899a012-8f71-47e0-b130-044707453b21");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Pokemon");

            migrationBuilder.CreateTable(
                name: "StarredPokemon",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: true),
                    UserId = table.Column<string>(type: "TEXT", nullable: true)
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
                values: new object[] { "3822ffde-2748-4ee1-8fe5-dee790f5a150", "d5f26048-0a6f-47af-9d20-702ed24a84e7", "Member", "MEMBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "a0f42024-67f7-4231-8852-43450f69b2d2", "178ed0c8-a115-40a1-84f3-0b5d3c001eec", "Admin", "ADMIN" });

            migrationBuilder.CreateIndex(
                name: "IX_StarredPokemon_UserId",
                table: "StarredPokemon",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StarredPokemon");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3822ffde-2748-4ee1-8fe5-dee790f5a150");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a0f42024-67f7-4231-8852-43450f69b2d2");

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "Pokemon",
                type: "TEXT",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "26c546aa-a9c4-4aa3-b23d-6a53831b62d5", "fa763ba4-cc61-4951-976c-ac4ee1a9c59d", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "f899a012-8f71-47e0-b130-044707453b21", "5ef43dc4-1131-4504-865c-0dc8a6e4d6fb", "Member", "MEMBER" });

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
    }
}
