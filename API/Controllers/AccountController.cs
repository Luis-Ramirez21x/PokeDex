using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using API.Data;
using API.DTOs;
using API.Entities;
using API.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    public class AccountController : BaseApiController
    {
        private readonly UserManager<User> _userManager;
        private readonly TokenService _tokenService;
        private readonly PokedexContext _context;
        public AccountController(UserManager<User> userManager, TokenService tokenService, PokedexContext context)
        {
            _context = context;
            _tokenService = tokenService;
            _userManager = userManager;
        }
        [HttpGet("users")]
        
         public async Task<List<User>> 
         GetAllUsers()
         {
             return await _userManager.Users.ToListAsync();
         }
        

        [HttpPost("login")]
        public async Task<ActionResult<UserDTO>> Login(LoginDTO loginDto)
        {
            var user = await _userManager.FindByNameAsync(loginDto.Username);

            if (user == null || !await _userManager.CheckPasswordAsync(user, loginDto.Password))
                return Unauthorized();

            /*var userBasket = await RetrieveBasket(loginDto.Username);
            var anonBasket = await RetrieveBasket(Request.Cookies["buyerId"]);

            if (anonBasket != null)
            {
                if (userBasket != null) _context.Baskets.Remove(userBasket);
                anonBasket.BuyerId = user.UserName;
                Response.Cookies.Delete("buyerId");
                await _context.SaveChangesAsync();
            }
            */
            return new UserDTO
            {
                Email = user.Email,
                Token = await _tokenService.GenerateToken(user),
                //Basket = anonBasket != null ? anonBasket.MapBasketToDto() : userBasket?.MapBasketToDto()
            };
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register(RegisterDTO registerDto)
        {
            var user = new User { UserName = registerDto.Username, Email = registerDto.Email };

            var result = await _userManager.CreateAsync(user, registerDto.Password);

            if (!result.Succeeded)
            {
                foreach (var error in result.Errors)
                {
                    ModelState.AddModelError(error.Code, error.Description);
                }

                return ValidationProblem();
            }

            await _userManager.AddToRoleAsync(user, "Member");

            return StatusCode(201);
        }
        [Authorize]
        [HttpPost("starUnstarPokemon")]
        public async Task<ActionResult<Pokemon>>
        StarUnstarPokemon(PokemonDTO newPoke)
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);

            var entity = await _context.Pokemon.FirstOrDefaultAsync(p => p.Name == newPoke.Name);

            
            if(entity != null)
            {
                _context.Pokemon.Remove(entity);
                await _context.SaveChangesAsync();
            }else
            {
                _context.Pokemon.Add(new Pokemon{Name = newPoke.Name, User = user});
                await _context.SaveChangesAsync();
            }




            return entity;
        }


        [HttpPost("starredPokemon")]
        public async Task<ActionResult<List<string>>>
        GetStarredPokemon()
        {
            //find current user 
            var user = await _userManager.FindByNameAsync(User.Identity.Name);

            

            var list = new List<string>();
            foreach( var poke in _context.Pokemon)
            {
                if(poke?.User?.Id == user.Id)
                {
                    list.Add(poke.Name);
                }
            }
            
            return list;
        }

        
        [HttpGet("currentUser")]
        public async Task<ActionResult<UserDTO>> GetCurrentUser()
        {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);

            //var userBasket = await RetrieveBasket(User.Identity.Name);

            return new UserDTO
            {
                Email = user.Email,
                Token = await _tokenService.GenerateToken(user),
               // Basket = userBasket?.MapBasketToDto()
            };
        }

       /* [Authorize]
        [HttpPost("starredPokemon")]
        public async Task<ActionResult<User>> StarPokemon(int pokemonNum)
        {
            //find current user 
            var user = await _userManager.FindByNameAsync(User.Identity.Name);

            //add it to user StarredPokemonId
             user.StarredPokemonIds.Add(new PokemonIds(pokemonNum));

            return user;
        }

        //use this as model for retrieving a Team, or possible starred pokemon

        private async Task<Basket> RetrieveBasket(string buyerId)
        {
            if (string.IsNullOrEmpty(buyerId))
            {
                Response.Cookies.Delete("buyerId");
                return null;
            }

            return await _context.Baskets
                .Include(i => i.Items)
                .ThenInclude(p => p.Product)
                .FirstOrDefaultAsync(x => x.BuyerId == buyerId);
        }
*/
    }
}