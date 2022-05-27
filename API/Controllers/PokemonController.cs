using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization.Infrastructure;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class PokemonController : BaseApiController
    {
        private readonly PokedexContext _context;
        public PokemonController(PokedexContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Pokemon>>>
        GetPokemon()
        {
            return await _context.Pokemon.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Pokemon>>
        GetSinglePokemon( int id)
        {
            var pokemon = await _context.Pokemon.FindAsync(id);

            if(pokemon == null ) return NotFound();

            return pokemon;
        }

        [HttpPost]
        public async Task<ActionResult<Pokemon>>
        AddPokemon( Pokemon newPokemon )
        {
            

            _context.Pokemon.Add(newPokemon);
            await _context.SaveChangesAsync();

            return newPokemon;
        }

    }
}