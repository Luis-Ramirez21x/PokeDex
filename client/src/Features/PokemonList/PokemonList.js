import axios from "axios"
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BasicCard from "./BasicCard/BasicCard";
import './PokemonList.css'




function PokemonList(){
    let [pokelist, setPokelist] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then(res => setPokelist(res.data.results))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])

    if(loading){
        return(<h2>Loading...</h2>)
    }
    
    
    
    return(
        <Container>
            <Row xs={2} md={2}>
               
                {pokelist.map((pokemon) =>{
                    return(
                        <BasicCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
                    )
                })}

 
                
            </Row>
        </Container>
            
        
    )
}

export default PokemonList;