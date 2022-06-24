import { Card, Col, Container, Row, Badge } from "react-bootstrap";
import './CardHeader.css';
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import Auth from '../../../../App/Util/auth'



function CardHeader({imgUrl, name, types, id, isStarred}){
    const [loading, setLoading] = useState(false);
    let token = Auth.getToken();
    let [stared, starPokemon] = useState( isStarred);
   
    console.log(isStarred);
    //const [loading, setLoading] = useState(true);
     //star pokemon state 
    
    
    
    
        function isStared(){
            //let bool = false;
            console.log(starredPokelist.length)
        for(let i=0; i<starredPokelist.length; i++){
            
            if(name == starredPokelist[i]){
               starPokemon(true);
               return;
            }   
        }
        
    }

   
    function savePokemon(){
        
        //if pokemon is starred show star 
        //else grey star
 
        starPokemon(!stared);

        
        let newPokemon = { name : name, url : `/pokemon/${id}`, imageUrl : imgUrl}
        axios.post(`https://localhost:7208/api/Account/starUnstarPokemon`, newPokemon,{

            headers: {
              "Authorization": `Bearer ${token}`
            }
        })
            .then(res => console.log(res))
            .catch(error => console.log(error))
           
        
    }
    
    if(loading){
        return(<h2>Loading...</h2>)
    }

    
    
    
    return(
        <Container>
            <Row>
                <Col>
                    <Card className="header">
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <FaStar key={'star'} 
                        size={24} color={stared ? "#FFBA5A" : "#a9a9a9"} 
                        style={{marginRight: 10,}}
                        onClick={savePokemon}/>
                        <Card.Text>
                            {types.map((type) => {
                                return(
                                    <Badge pill bg="dark" key={type.type.name}>
                                    {type.type.name}
                                </Badge>
                                )
                            })}
                        </Card.Text>
                        </Card.Body>
                        <Card.Img variant="top" src={imgUrl} />
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default CardHeader;