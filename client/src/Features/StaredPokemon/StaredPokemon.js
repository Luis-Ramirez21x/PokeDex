import axios from "axios";
import { useEffect, useState } from "react";
import Auth from '../../App/Util/auth';
import { Container, Row } from "react-bootstrap";
import BasicCard from '../PokemonList/BasicCard/BasicCard'
import auth from "../../App/Util/auth";
import LoginRedirect from "../../Errors/LoginRedirect";
import starters from '../../Images/starters.png';
import './StaredPokemon.css'




function StaredPokemon() {
    let [starredPokelist, setPokelist] = useState({});
    const [loading, setLoading] = useState(true);
    let loggedIn = Auth.loggedIn();
    
    let token = Auth.getToken();

    useEffect( () => {
        

        if(loggedIn){
            axios.post("https://localhost:7208/api/Account/starredPokemon", {},{

                headers: {
                  "Authorization": `Bearer ${token}`
                }
            })
            .then( res => setPokelist(res.data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
        }else{ setLoading(false)}
       
    }, [])


    if(loading){
        return (
            <h2>Loading...</h2>
        )
    }
    
    if(starredPokelist.length === 0 && loggedIn){
        return(
            <Container>
                <Row>
                    <div className="empty-list-msg">
                        <h2>Add pokemon from the pokedex to your collection!</h2>
                        <img src={starters}/>
                    </div>
                </Row>
            </Container>
        )
    }
    else{
        return(
            <Container>
            <Row xs={2} md={2}>
               {loggedIn?
                starredPokelist.map((pokemon) =>{
                    return(
                        <BasicCard key={pokemon} name={pokemon} url={`https://pokeapi.co/api/v2/pokemon/${pokemon}`} />
                    )
                })   
             : <LoginRedirect/>}
                
    
    
                
            </Row>
        </Container>
        )
    }
    
    
}

export default StaredPokemon;