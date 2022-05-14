import { Card, Col, Container, Row, Badge } from "react-bootstrap";
import './CardHeader.css';


function CardHeader({imgUrl, name, types}){
    

    return(
        <Container>
            <Row>
                <Col>
                    <Card className="header">
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
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