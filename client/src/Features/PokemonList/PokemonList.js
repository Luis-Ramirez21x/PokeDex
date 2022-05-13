import axios from "axios"
import { useEffect, useState } from "react";



function PokemonList(){
    let [pokelist, setPokelist] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=50')
        .then(res => setPokelist(res.data.results))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }, [])

    
    
    console.log(pokelist);
    return(
        <>
            <h2>test</h2>
        </>
    )
}

export default PokemonList;