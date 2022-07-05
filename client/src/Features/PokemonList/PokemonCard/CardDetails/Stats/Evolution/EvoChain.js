import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import {capitalize} from '../../../../../../App/Util/util'
import './EvoChain.css'

function EvoChain({evoChain}) {
    const [loading, setLoading] = useState(true);
    let [imageUrl1, setUrl1] = useState();
    let [imageUrl2, setUrl2] = useState();
    let [imageUrl3, setUrl3] = useState();


    let evo1;
    let evo2;
    let evo3;


    evo1 = evoChain.species.name;

    if(evoChain.evolves_to[0].length !=0 ){
        evo2= evoChain.evolves_to[0].species.name
    }
    if(evoChain.evolves_to[0].evolves_to.length != 0){
        evo3= evoChain.evolves_to[0].evolves_to[0].species.name
    }



    useEffect(() =>{

        let url = 'https://pokeapi.co/api/v2/pokemon/'

        const getImageUrls = async () => {
            let poke1Data = await axios.get(url + evo1);
            setUrl1(poke1Data.data.sprites.front_default) 
            
            if(evo2 != null){
                let poke2Data = await axios.get(url + evo2);
                setUrl2(poke2Data.data.sprites.front_default);
            }
    
            if(evo3 != null){
                let poke3Data = await axios.get(url + evo3);
                setUrl3(poke3Data.data.sprites.front_default);
            }
        }
         
        getImageUrls()
        .catch((err) => console.log(err))
        setLoading(false)
    }, [])

    
 

   
    
    
    
    
    
    

    if(loading){
        return(<h3>loading</h3>)
    }

    
console.log(evoChain);
    return(
        <>
        <div className="evo-container">
            <Card className="evo-img">
                <Card.Img variant="top" src={imageUrl1} />
                <Card.Body>
                <Card.Title>{capitalize(evo1)}</Card.Title>
                </Card.Body>
            </Card>
            <Card className="evo-img">
                <Card.Img variant="top" src={imageUrl2} />
                <Card.Body>
                <Card.Title>{capitalize(evo2)}</Card.Title>
                </Card.Body>
            </Card>
            <Card className="evo-img">
                <Card.Img variant="top" src={imageUrl3} />
                <Card.Body>
                <Card.Title>{capitalize(evo3)}</Card.Title>
                </Card.Body>
            </Card>
            </div>
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