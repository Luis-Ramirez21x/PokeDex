using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace API.Entities
{
    public class User : IdentityUser
    {
        public List<Pokemon> StarredPokemonIds { get; set; } = new();

        
    }
}