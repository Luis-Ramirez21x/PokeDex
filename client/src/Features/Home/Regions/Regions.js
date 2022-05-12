import { Container, Row, Card,Col } from "react-bootstrap";
import './Regions.css'

function Regions(){

    
    return(
        <Container>
            <Row xs={2} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col>
                    <Card className="regions" bg={'danger'} >
                        
                        <Card.Body>
                        <Card.Title>Region</Card.Title>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Regions;