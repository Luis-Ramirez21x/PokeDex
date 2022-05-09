import axios from 'axios';
import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';

function PokemonCard (){
    let [pokemon, setPokemon ] = useState();

    axios.get("https://pokeapi.co/api/v2/pokemon/pikachu/")
        .then(res => setPokemon(res))
        .catch(error => console.log(error))
        console.log(pokemon);
      return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card> 
      )
}

export default PokemonCard;