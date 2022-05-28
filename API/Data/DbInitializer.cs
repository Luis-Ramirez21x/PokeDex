using System.Collections.Generic;
using System.Linq;
using API.Entities;
using Microsoft.AspNetCore.Identity;

namespace API.Data
{
    public static class DbInitializer
    {
        //create list of products
        //add to db
        //save to db
        public static void Initialize(PokedexContext context, UserManager<User> userManager)
        {
            //if Products table contains anything return
            if (context.Pokemon.Any()) return;
            //creates List of data Type Product from the class we created earlier
            var pokemon  = new List<Pokemon>
            {
                		new Pokemon
                {
                    Name= "Fake Pokemon",
                    Url = "Fake URL",
                    ImageUrl = "Fake image URL",

                },
                        new Pokemon
                {
                    Name = "Pokemon 1",
                    Url = "Fake Url Again",
                    ImageUrl = "another one Fake Url",
                }
            };
            //loops through our list of Product 
            foreach(var poke in pokemon)
            {
                //adds to our proudcts table, not yet saved just as pending
                context.Pokemon.Add(poke);
            }
                //saves all those peding changes
            context.SaveChanges();
        }
    }
}