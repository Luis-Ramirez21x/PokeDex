import axios from "axios"
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BasicCard from "./BasicCard/BasicCard";
import './PokemonList.css'




function PokemonList(){
    let [pokelist, setPokelist] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')
        .then(res => setPokelist(res.data.results))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])

    
    
    console.log(pokelist);
    return(
        <Container>
            <Row xs={2} md={2}>
                <Col>
                    <BasicCard/>
                </Col>
                <Col>
                    <BasicCard/>
                </Col>
                <Col>
                    <BasicCard/>
                </Col>
                
            </Row>
        </Container>
            
        
    )
}

export default PokemonList;