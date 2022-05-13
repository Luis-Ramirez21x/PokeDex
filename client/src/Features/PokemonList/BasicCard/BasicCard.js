import axios from "axios";
import { Card, Badge } from "react-bootstrap";
import { useEffect, useState } from "react";

function BasicCard({name, url}){

    const [pokemon, setPokemon] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(url)
        .then(res => setPokemon(res.data))
        .finally(() => setLoading(false))
    }, [])

    

    if(loading) {
        return(<h2>Loading..</h2>)
    }
    console.log(pokemon)
    return(
        <Card className='basicCard'>
            <Card.Img variant="top" src={pokemon.sprites.other.dream_world.front_default} />
            <Card.Body>
            <Card.Title className='pokeName'>{name.charAt(0).toUpperCase(0) + name.slice(1)}</Card.Title>
            <Card.Text>

                {pokemon.types.map((type) => {
                    return(
                        <Badge pill bg="dark">
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