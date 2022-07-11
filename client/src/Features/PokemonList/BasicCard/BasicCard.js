import axios from "axios";
import { Card, Badge } from "react-bootstrap";
import { useEffect, useState, Link } from "react";
import pokeball from '../../../Images/pokeball.png'

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
   console.log(pokemon);
    return(
        <Card 
        className={`basicCard ${color}`}
        as="a" 
        href={`/pokemon/${pokemon.id}`} 
        style={{ cursor: "pointer"}} 
        >
            <img className="pokeball" src={pokeball} alt=""></img>
            <h6 className='pokeName'>{name.charAt(0).toUpperCase(0) + name.slice(1)}</h6>
            
            <div className='basicCardDetails'>
            <Card.Img className ="card-img-top-basic" variant="top" src={pokemon.sprites.other.dream_world.front_default} />
            <Card.Body className="card-body-basic">
            
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
            </div>
        </Card>
    )
}

export default BasicCard;