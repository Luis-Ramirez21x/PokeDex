import axios from "axios"
import { useEffect, useState, useRef, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BasicCard from "./BasicCard/BasicCard";
import './PokemonList.css'

let url;


function PokemonList(){


    
let [pokelist, setPokelist] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);
let [nextUrl, setNextUrl] = useState('https://pokeapi.co/api/v2/pokemon');
let [query, setQuery]= useState('');

useEffect(() => {
    setPokelist([]);
  }, [query])

useEffect(() => {
    setLoading(true)
    setError(false)
    let cancel;
    axios({
        method: 'GET',
        url:  nextUrl,
        cancelToken: new axios.CancelToken(c => cancel = c)
      })
    .then(res =>{
        url = res.data.next
        setPokelist([...pokelist, ...res.data.results]);
        
    })
    .catch(e => {
        if (axios.isCancel(e)) return
        setError(true)
      })
    .finally(setLoading(false))
    }, [nextUrl, query])

    const observer = useRef()
    const lastPokemonRef = useCallback(node => {
    if (loading) return
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
       setNextUrl(url);
        }
    })
    if (node) observer.current.observe(node)
    }, [loading])

    function handleSearch(e) {
        setQuery(e.target.value);
        setPageNumber(1);
    }



    if(loading){
        return(<h2>Loading...</h2>)
    }
    
    return(
        <Container>
            <h1>Pokedex</h1>
            <input type="text" onChange={handleSearch}></input>
            <Row xs={2} md={2}>
               
                {pokelist.map((pokemon, index) =>{
                    if(pokelist.length === index+1){
                        return (
                        <div ref={lastPokemonRef} key={pokemon.name} name={pokemon.name} url={pokemon.url}>test</div>
                        )
                    }
                    return(
                        <BasicCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
                    )
                })}

                <div>Loading...</div>
                <div>Error</div>
                
            </Row>
        </Container>
            
        
    )
}

export default PokemonList;


/*

*/