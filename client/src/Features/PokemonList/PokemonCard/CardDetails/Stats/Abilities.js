import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";


function Abilities({abilities}){
    let [abilityData, setAbilityData] = useState();
    const [loading, setLoading] = useState(true);

        useEffect(() => {
           
    
        
            //gets Url from api call
            let ablUrl = [];
            for(let i=0; i<abilities.length; i++){
                ablUrl.push(abilities[i].ability.url)
            }
            
            let abilData = [];
            for(let i =0; i<ablUrl.length; i++){
                let response = axios.get(ablUrl[i])
                abilData.push(response)
                
            }
    
            Promise.all(abilData)
                .then((res) => setAbilityData(res))
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        },[])


        

        if(loading){
            return(
                <h2>Gathering Data...</h2>
            )
        }
    


    return (
    <>
    <Table>
        <tbody>
        {abilityData.map((ability) => {

            return(
                <tr key={ability.data.name}>
                    <td>{ability.data.name}</td>
                    <td>{ability.data.effect_entries[1].effect}</td>
                </tr>
            )

        })}
        </tbody>
    </Table>
    </>
    )
}

export default Abilities;