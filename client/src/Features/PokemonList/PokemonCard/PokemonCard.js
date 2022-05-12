import axios from 'axios';
import { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';

function PokemonCard (){
    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      axios.get("https://pokeapi.co/api/v2/pokemon/pikachu/")
      .then( res => setPokemon(res.data))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
    }, [])

    console.log(pokemon)
    
      return(
        <>
        {loading ? (<h2>loading...</h2>) : (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  {pokemon.name}
                  {pokemon.types[0].type.name}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card> 
        )}
        </>
      )
}

export default PokemonCard;

