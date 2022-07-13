import { Card, Col, Container, Row, Badge } from "react-bootstrap";
import './CardHeader.css';
import { FaStar } from "react-icons/fa";
import { useState} from "react";
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import Auth from '../../../../App/Util/auth'
import pokeball from '../../../../Images/pokeball.png'
import {capitalize} from '../../../../App/Util/util'



function CardHeader({imgUrl, name, types, id, isStarred, color}){
    let loggedIn = Auth.loggedIn();
    let token = Auth.getToken();
    let [stared, starPokemon] = useState( isStarred);
    const navigate = useNavigate();
    

    
    
    
    
 

   
    function savePokemon(){
        
        if(loggedIn){
            starPokemon(!stared);

        
            let newPokemon = { name : name, url : `/pokemon/${id}`, imageUrl : imgUrl}
            axios.post(process.env.REACT_APP_API_URL + `Account/starUnstarPokemon`, newPokemon,{
    
                headers: {
                  "Authorization": `Bearer ${token}`
                }
            })
                .then(res => console.log(res))
                .catch(error => console.log(error))
        }else{
            navigate("/redirect")
        }
 

           
        
    }

    
    
    return(
        <Container>
            <Row>
                <Col>
                    <Card className={`header ${color}`}>
                        <Card.Body className="header-container">
                        <div className="arrow-name-badge">
                            <a href="/pokemonList" className="back-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle back-arrow" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                            </svg>
                            </a>
                            <Card.Title className="card-name">{capitalize(name)}</Card.Title>
                            <Card.Text>
                            {types.map((type) => {
                                return(
                                    <Badge pill bg="dark" key={type.type.name}>
                                    {type.type.name}
                                </Badge>
                                )
                            })}
                        </Card.Text>
                        
                        </div>
                        <div className="star-id">
                        <FaStar key={'star'} 
                            size={24} color={stared ? "#FFBA5A" : "#a9a9a9"} 
                            style={{marginRight: 10,}}
                            onClick={savePokemon}
                            className="star"/>
                        <p className="id-number">#{id}</p>
                        </div>
                        
                        </Card.Body>
                        <img className="bg-img" src={pokeball} alt=""></img>
                        <div className="card-top"></div>
                        <Card.Img className="main-img" variant="top" src={imgUrl} />
                        
                        
                        
                        
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default CardHeader;