import { Col, Container, Row, Nav } from "react-bootstrap";
import TabNav from './TabNav'
import { useState } from "react";
import About from './Stats/About';
import BaseStats from './Stats/BaseStats';
import Evolution from './Stats/Evolution/Evolution';
import Abilities from './Stats/Abilities';
import './CardDetails.css'


function CardDetails({pokemon, color}){

    const [currentTab, setCurrentTab] = useState('About');

    const renderTab = () => {
        if (currentTab === 'About') {
          return <About pokemon={pokemon}  speciesUrl={pokemon.species.url}/>;
        }
        if (currentTab === 'Base Stats') {
          return <BaseStats stats={pokemon.stats} color={color}/>;
        }
        if (currentTab === 'Evolution') {
          return <Evolution speciesUrl={pokemon.species.url}/>;
        }
        return <Abilities abilities={pokemon.abilities}  />;
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