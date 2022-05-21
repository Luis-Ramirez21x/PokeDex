import { useEffect, useState } from "react";
import axios from "axios";
import EvoChain from "./EvoChain";



function Evolution({speciesUrl}){
    let [evolutionChain, setEvolutionChain] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const getData = async () =>{

            const speciesRes= await axios.get(speciesUrl)
            const evoUrl = speciesRes.data.evolution_chain.url

            const evoData = await axios.get(evoUrl)
            setEvolutionChain(evoData);
            setLoading(false);           

        }

        
        getData();
    },[])

    

    if(loading){
        return(<h2>getting data...</h2>)
    }

    
    return (
        <>
        
            <h2>Evolution Chain</h2>
            <EvoChain evoChain={evolutionChain.data.chain}/>
            
        </>
    )
}

export default Evolution;