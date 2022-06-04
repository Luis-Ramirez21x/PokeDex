using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class PokemonIds
    {
        public int Id { get; set; }
        public int PokemonId { get; set; }

        public PokemonIds(int pokemonId)
        {
            PokemonId = pokemonId;
        }
    }
}