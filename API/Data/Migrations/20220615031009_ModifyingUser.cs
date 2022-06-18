using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace API.Data.Migrations
{
    public partial class ModifyingUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "3822ffde-2748-4ee1-8fe5-dee790f5a150");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a0f42024-67f7-4231-8852-43450f69b2d2");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "8f675b90-4542-43ae-a223-8d805da8710a", "27b321a3-1fb9-44bd-8deb-3e68c328260b", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "c99cf968-f606-4e3f-b79a-797d87098a86", "8ee7a912-7b49-44c7-82c6-ce854e931da7", "Member", "MEMBER" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
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
                values: new object[] { "3822ffde-2748-4ee1-8fe5-dee790f5a150", "d5f26048-0a6f-47af-9d20-702ed24a84e7", "Member", "MEMBER" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "a0f42024-67f7-4231-8852-43450f69b2d2", "178ed0c8-a115-40a1-84f3-0b5d3c001eec", "Admin", "ADMIN" });
        }
    }
}
