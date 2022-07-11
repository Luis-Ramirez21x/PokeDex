import axios from "axios"
import { useEffect, useState, useRef, useCallback } from "react";
import { Container, Row, InputGroup, Form, Button} from "react-bootstrap";
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
    setLoading(true)
    setError(false)
    let cancel;
    axios({
        method: 'GET',
        url:  nextUrl,
        cancelToken: new axios.CancelToken(c => cancel = c)
      })
    .then(res =>{
        if(query){
            url=null;
            setPokelist([{name:query, url:`https://pokeapi.co/api/v2/pokemon/${query}`}])
        }else{
            url = res.data.next
        setPokelist([...pokelist, ...res.data.results]);
        }
        
        
    })
    .catch(e => {
        if (axios.isCancel(e)) return
        setError(true)
      })
    .finally(setLoading(false))
    }, [nextUrl])

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

    function handleChange(e){
        setQuery(e.target.value)
    }

    function handleSearch() {
        setLoading(true);
        setNextUrl(`https://pokeapi.co/api/v2/pokemon/${query}`);

      
    }


    



    if(loading){
        return(<h2>Loading...</h2>)
    }
    
    return(
        <Container>
            <h1 style={{"text-align":"center"}}>Pokedex</h1>
            
            
        <InputGroup className="mb-3 search-box">
            <Form.Control
            placeholder="Search Pokemon..."
            aria-label="Pokemon"
            aria-describedby="basic-addon2"
            value={query}
            onChange={handleChange}
            />
            <Button variant="outline-secondary" id="button-addon2" onClick={handleSearch}>
            Find
            </Button>
        </InputGroup>
            <Row xs={2} md={2}>
               
                {pokelist.map((pokemon, index) =>{
                    if(pokelist.length === index+1 && nextUrl){
                        return (
                        <div ref={lastPokemonRef} key={pokemon.name} name={pokemon.name} url={pokemon.url}>test</div>
                        )
                    }
                    return(
                        <BasicCard key={pokemon.name} name={pokemon.name} url={pokemon.url} />
                    )
                })}

                
                
            </Row>
        </Container>
            
        
    )
}

export default PokemonList;


/*

*/