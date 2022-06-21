import axios from "axios";
import { useEffect, useState } from "react";
import Auth from '../../App/Util/auth';
import { Container, Row } from "react-bootstrap";
import BasicCard from '../PokemonList/BasicCard/BasicCard'




function StaredPokemon() {
    let [starredPokelist, setPokelist] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        let token = Auth.getToken();


        axios.post("https://localhost:7208/api/Account/starredPokemon", {},{

            headers: {
              "Authorization": `Bearer ${token}`
            }
        })
        .then( res => setPokelist(res.data))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])


    if(loading){
        return (
            <h2>Loading...</h2>
        )
    }

    
    return(
        <Container>
        <Row xs={2} md={2}>
           
            {starredPokelist.map((pokemon) =>{
                return(
                    <BasicCard key={pokemon.name} name={pokemon.name} url={`https://pokeapi.co/api/v2/pokemon/${pokemon}`} />
                )
            })}


            
        </Row>
    </Container>
    )
    
}

export default StaredPokemon;