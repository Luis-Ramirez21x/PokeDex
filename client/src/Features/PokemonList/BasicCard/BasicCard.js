import { Card, Badge } from "react-bootstrap";

function BasicCard(){

    return(
        <Card className='basicCard'>
            <Card.Img variant="top" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" />
            <Card.Body>
            <Card.Title className='pokeName'>Pokemon Name</Card.Title>
            <Card.Text>
                <Badge bg="dark">Dark</Badge>
                <Badge bg="dark">Dark</Badge>
            </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default BasicCard;