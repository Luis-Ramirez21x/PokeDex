using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    public partial class RemovingUserFromPoke : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "84005817-32a6-496c-8cf1-a42733cc8117");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c7edd606-73b5-4e1d-8f2f-679182e5d3cb");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "26c546aa-a9c4-4aa3-b23d-6a53831b62d5", "fa763ba4-cc61-4951-976c-ac4ee1a9c59d", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "f899a012-8f71-47e0-b130-044707453b21", "5ef43dc4-1131-4504-865c-0dc8a6e4d6fb", "Member", "MEMBER" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "26c546aa-a9c4-4aa3-b23d-6a53831b62d5");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "f899a012-8f71-47e0-b130-044707453b21");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "84005817-32a6-496c-8cf1-a42733cc8117", "8d49d4ed-e09b-4215-8164-bf75930acf3b", "Member", "MEMBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "c7edd606-73b5-4e1d-8f2f-679182e5d3cb", "06274745-2be9-4173-ab7d-b014513a058f", "Admin", "ADMIN" });
        }
    }
}
