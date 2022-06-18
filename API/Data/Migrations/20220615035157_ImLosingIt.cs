using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    public partial class ImLosingIt : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8f675b90-4542-43ae-a223-8d805da8710a");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c99cf968-f606-4e3f-b79a-797d87098a86");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "887299da-d6e1-4a5c-94af-ac6b1254adee", "ddcd4c39-e3d5-4192-abd5-db956cd977fe", "Member", "MEMBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "945068bb-d7dc-47fd-b6da-6ddb7be0f09c", "e3015118-3b4f-4584-bff6-67fb7aaa74df", "Admin", "ADMIN" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "887299da-d6e1-4a5c-94af-ac6b1254adee");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "945068bb-d7dc-47fd-b6da-6ddb7be0f09c");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "8f675b90-4542-43ae-a223-8d805da8710a", "27b321a3-1fb9-44bd-8deb-3e68c328260b", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "c99cf968-f606-4e3f-b79a-797d87098a86", "8ee7a912-7b49-44c7-82c6-ce854e931da7", "Member", "MEMBER" });
        }
    }
}
