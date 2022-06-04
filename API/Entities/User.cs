using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace API.Entities
{
    public class User : IdentityUser
    {
        public List<PokemonIds> StarredPokemonIds { get; set; } 

        
    }
}