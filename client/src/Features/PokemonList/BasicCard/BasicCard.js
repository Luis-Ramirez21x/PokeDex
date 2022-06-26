import axios from "axios";
import { Card, Badge } from "react-bootstrap";
import { useEffect, useState, Link } from "react";

function BasicCard({name, url}){
    
    const [pokemon, setPokemon] = useState();
    const [color, setColor] = useState();
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {



        axios.get(url)
        .then(res => setPokemon(res.data))
        .then( 
            axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
                .then(res => setColor(res.data.color.name))
                .catch(error => console.log(error))
        )
        .catch(error => console.log(error))
        .finally(() => setLoading(false))

        
    }, [])

    

    if(loading) {
        return(<h2>Loading..</h2>)
    }
   console.log(color);
    return(
        <Card 
        className={`basicCard ${color}`}
        as="a" 
        href={`/pokemon/${pokemon.id}`} 
        style={{ cursor: "pointer"}} 
        >
   
            <Card.Img variant="top" src={pokemon.sprites.other.dream_world.front_default} />
            <Card.Body>
            <Card.Title className='pokeName'>{name.charAt(0).toUpperCase(0) + name.slice(1)}</Card.Title>
            <Card.Text>

                {pokemon.types.map((type) => {
                    return(
                        <Badge pill bg="dark" key={type.type.name}>
                        {type.type.name}
                      </Badge>
                    )
                })}
                
                
            </Card.Text>
            </Card.Body>
            
        </Card>
    )
}

export default BasicCard;