import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";


function EvoChain({evoChain}) {
    const [loading, setLoading] = useState(true);

    let [evo1, setEvo1] = useState({name: null, imageUrl: null})
    let [evo2, setEvo2] = useState({name: null, imageUrl: null})  
    let [evo3, setEvo3] = useState({name: null, imageUrl: null})      

    useEffect(() =>{
        setEvo1( 
            {name: evoChain.species.name}
        )
        if(evoChain.evolves_to[0].length !=0 ){
            setEvo2(
                {name:evoChain.evolves_to[0].species.name}
                )
        }
        if(evoChain.evolves_to[0].evolves_to.length != 0){
            setEvo3(
                {name:evoChain.evolves_to[0].evolves_to[0].species.name}
            )
        }

        const getEvoImages = async () => {
            let url = 'https://pokeapi.co/api/v2/pokemon/'
            console.log(evo1.name)
            let poke1Data = await axios.get(url + evo1.name);
            setEvo1(
                {imageUrl: poke1Data.data.sprites.front_default}
            )
        }

        getEvoImages();

    }, [])

    
    

   
    //console.log(evoChain)
    
    //getEvoImages();
    
    


    if(loading){
        return(<h3>loading</h3>)
    }

       console.log(evo3)

    return(
        <>
            <Card>
                <Card.Img variant="top" src={evo1.imageUrl} />
                <Card.Body>
                <Card.Title>{evo2.name}</Card.Title>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={evo2.imageUrl} />
                <Card.Body>
                <Card.Title>{evo2.name}</Card.Title>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" src={evo3.imageUrl} />
                <Card.Body>
                <Card.Title>{evo3.name}</Card.Title>
                </Card.Body>
            </Card>
        
        </>
    )
}

export default EvoChain;











    /*
    let evo1 = {name: null, imageUrl: null};
    let evo2 = {name: null, imageUrl: null};
    let evo3 = {name: null, imageUrl: null};
    
    function getEvolutions(){

        evo1.name = evoChain.species.name;

        if(evoChain.evolves_to[0].length !=0 ){
            evo2.name = evoChain.evolves_to[0].species.name
        }
        if(evoChain.evolves_to[0].evolves_to.length != 0){
            evo3.name = evoChain.evolves_to[0].evolves_to[0].species.name
        }
    }

    const getEvoImages = async () => {

    let url = 'https://pokeapi.co/api/v2/pokemon/'
         
            let poke1Data = await axios.get(url + evo1.name);
            evo1.imageUrl = poke1Data.data.sprites.front_default;
            
        if(evo2.name != null){
            let poke2Data = await axios.get(url + evo2.name);
            evo2.imageUrl = poke2Data.data.sprites.front_default;
        }

        if(evo3.name != null){
            let poke3Data = await axios.get(url + evo3.name);
            evo3.imageUrl = poke3Data.data.sprites.front_default;
        }
        
        
        setLoading(false);
    }

    */