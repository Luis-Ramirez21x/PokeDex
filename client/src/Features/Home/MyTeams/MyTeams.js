import { Container, Row, Col } from "react-bootstrap"
import './MyTeams.css'

function MyTeams(){


    return(

        <Container>
            <Row xs={1}>
                <h2>My Teams</h2>
                <Col><div className='team'> <h1>Team# 1</h1> </div></Col>
                <Col><div className='team'> <h1>Team# 2</h1> </div></Col>
                <Col><div className='team'> <h1>Team# 3</h1> </div></Col>
                
            </Row>
        </Container>
    )
}

export default MyTeams;