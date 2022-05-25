using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class PokedexContext : DbContext
    {
        public PokedexContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Pokemon> Pokemon { get; set; }
    }
}