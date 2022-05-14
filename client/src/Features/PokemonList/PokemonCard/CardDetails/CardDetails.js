import { Col, Container, Row, Nav } from "react-bootstrap";
import TabNav from './TabNav'
import { useState } from "react";
import About from './Stats/About';
import BaseStats from './Stats/BaseStats';
import Evolution from './Stats/Evolution';
import Moves from './Stats/Moves';


function CardDetails({pokemon}){

    const [currentTab, setCurrentTab] = useState('BaseStats');

    const renderTab = () => {
        if (currentTab === 'About') {
          return <About pokemon={pokemon} abilities={pokemon.abilities} speciesUrl={pokemon.species.url}/>;
        }
        if (currentTab === 'BaseStats') {
          return <BaseStats stats={pokemon.stats}/>;
        }
        if (currentTab === 'Evolution') {
          return <Evolution />;
        }
        return <Moves />;
      };

    return(

        <Container>
            <Row>
                <Col>
                    <TabNav currentTab={currentTab} setCurrentTab={setCurrentTab}/>
                    {renderTab()}
                </Col>
            </Row>
        </Container>
    )
}

export default CardDetails;