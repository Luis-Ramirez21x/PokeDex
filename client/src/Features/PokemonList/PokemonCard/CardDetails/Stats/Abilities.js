import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import './Abilities.css'
import {capitalize} from '../../../../../App/Util/util'


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

        {abilityData.map((ability) => {

            return(
                <div className="abl-card">
                <h5>{capitalize(ability.data.name)}</h5>
                <p>{ability.data.effect_entries[1].effect}</p>

                </div>

            )

        })}

    </>
    )
}

export default Abilities;