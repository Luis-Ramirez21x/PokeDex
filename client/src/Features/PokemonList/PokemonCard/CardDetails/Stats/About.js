import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";


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
        <Table>
            <tbody>
                <tr>
                    <td>Species</td>
                    <td>{speciesData.genera[7].genus}</td>
                </tr>
                <tr>
                    <td>Habitat</td>
                    <td>{speciesData.habitat.name}</td>
                </tr>
                <tr>
                    <td>Height:</td>
                    <td>{pokemon.height}</td>
                </tr>
                <tr>
                    <td>Weigth:</td>
                    <td>{pokemon.weight}</td>
                </tr>
 
            </tbody>
        </Table>
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
        
        </>
    )
}

export default About;