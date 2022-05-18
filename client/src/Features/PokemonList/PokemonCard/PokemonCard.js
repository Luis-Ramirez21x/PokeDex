import axios from 'axios';
import { useEffect } from 'react';
import { Card, Button, Nav } from 'react-bootstrap';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CardHeader from './CardHeader/CardHeader'
import CardDetails from './CardDetails/CardDetails'

function PokemonCard (){
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(true);
    
    let {id} = useParams();

    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then( res => setPokemon(res.data))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
    }, [])




    
    
    
      return(
        <>
        {loading ? (<h2>loading...</h2>) : (
            <>
            <CardHeader imgUrl = {pokemon.sprites.other.dream_world.front_default}
            name={pokemon.name} 
            types={pokemon.types}
            />
            <CardDetails pokemon={pokemon} />
            </>
        )}
        </>
      )
}

export default PokemonCard;

