import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Card } from "react-bootstrap";


function About({pokemon, speciesUrl}){
    const [speciesData, setSpeciesData] = useState();
    const [loading, setLoading] = useState(true);
    
    

    useEffect(() => {
        axios.get(speciesUrl)
            .then(res => setSpeciesData(res.data))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    if(loading){
        return(
            <p>Loading Stats...</p>
        )    
    }

    
    return (

        <>
        <div className="about-stats">
        
        <Card>
            
            <Card.Body>
                <Card.Title>Species</Card.Title>
                <Card.Text>{speciesData.genera[7].genus}</Card.Text>        
            </Card.Body>
        </Card>
        <Card>
            <Card.Body>
                <Card.Title>Weight</Card.Title>
                <Card.Text>{pokemon.weight}</Card.Text>
            </Card.Body>
        </Card>
        
       
        <Card>
            <Card.Body>
                <Card.Title>Habitat</Card.Title>
                <Card.Text>{speciesData.habitat.name}</Card.Text>
            </Card.Body>
        </Card>
        <Card>
            <Card.Body>
                <Card.Title>Height</Card.Title>
                <Card.Text>{pokemon.height}</Card.Text>
            </Card.Body>
        </Card>
       

        </div>
 
        <div className="about-table">
        <h3>Breeding</h3>
        <Table>
            <tbody>
                <tr>
                    <td>Hatch Counter</td>
                    <td>{speciesData.hatch_counter + ' (x250 steps)'}</td>
                </tr>
                <tr>
                    <td>Egg Groups</td>
                    <td>{(speciesData.egg_groups).map((egg_group) =>{
                        return egg_group.name + " ";
                    })}</td>
                </tr>
                <tr>
                    <td>Growth Rate</td>
                    <td>{speciesData.growth_rate.name}</td>
                </tr>
            </tbody>
        </Table>
        </div>
        
        </>
    )
}

export default About;