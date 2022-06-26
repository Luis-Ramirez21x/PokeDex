import axios from 'axios';
import { useEffect } from 'react';
import { Card, Button, Nav } from 'react-bootstrap';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CardHeader from './CardHeader/CardHeader'
import CardDetails from './CardDetails/CardDetails'
import Auth from '../../../App/Util/auth'

function PokemonCard (){
    const [pokemon, setPokemon] = useState();
    const [color, setColor] = useState();
    const [loading, setLoading] = useState(true);
    let [starredPokelist, setPokelist] = useState({});
    
    let {id} = useParams();
    //variable sent as props to tell wether pokemon is already stared
    let isStarred = false;
    
    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then( res => setPokemon(res.data))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))

      axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
        .then(res => setColor(res.data))
        .catch(error => console.log(error));


      if(Auth.loggedIn){
      let token = Auth.getToken();
      axios.post("https://localhost:7208/api/Account/starredPokemon", {},{

        headers: {
          "Authorization": `Bearer ${token}`
        }
    })
    .then( res => setPokelist(res.data))
    .catch(error => console.log(error))
  }
    }, [])

    function checkStarred(){

      for(let i = 0; i < starredPokelist.length; i++){
        if(pokemon.name == starredPokelist[i] ){
            isStarred =true;
            break;
        }
      }

    }


    if(loading){
      return(
        <h2>Loading...</h2>
      )
    }
    checkStarred();
   
    console.log(pokemon);
      return(
        <>
        {loading ? (<h2>loading...</h2>) : (
            <>
            <CardHeader imgUrl = {pokemon.sprites.other.dream_world.front_default}
            name={pokemon.name} 
            types={pokemon.types}
            id= {id}
            isStarred = {isStarred}
            />
            <CardDetails pokemon={pokemon} />
            </>
        )}
        </>
      )
}

export default PokemonCard;

