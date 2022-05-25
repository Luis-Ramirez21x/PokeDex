import { Card, Col, Container, Row, Badge } from "react-bootstrap";
import './CardHeader.css';
import { FaStar } from "react-icons/fa";
import { useState } from "react";


function CardHeader({imgUrl, name, types}){

    //star pokemon state 
    const [stared, starPokemon] = useState(true);
    //const stars = Array(1).fill(0)

    function savePokemon(){
        starPokemon(!stared);
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