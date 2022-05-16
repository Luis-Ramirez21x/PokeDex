import { Col, Container, Row, Nav } from "react-bootstrap";
import TabNav from './TabNav'
import { useState } from "react";
import About from './Stats/About';
import BaseStats from './Stats/BaseStats';
import Evolution from './Stats/Evolution';
import Abilities from './Stats/Abilities';


function CardDetails({pokemon}){

    const [currentTab, setCurrentTab] = useState('BaseStats');

    const renderTab = () => {
        if (currentTab === 'About') {
          return <About pokemon={pokemon}  speciesUrl={pokemon.species.url}/>;
        }
        if (currentTab === 'Base Stats') {
          return <BaseStats stats={pokemon.stats}/>;
        }
        if (currentTab === 'Evolution') {
          return <Evolution />;
        }
        return <Abilities abilities={pokemon.abilities}/>;
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