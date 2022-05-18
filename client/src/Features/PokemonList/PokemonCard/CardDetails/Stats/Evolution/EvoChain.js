

function EvoChain({evoChain}) {
    console.log(evoChain)

    let evo1;
    let evo2;
    let evo3;

    function getEvolutions(){

        evo1 = evoChain.species.name;
        if(evoChain.evolves_to[0].length !=0 ){
            evo2 = evoChain.evolves_to[0].species.name
        }
        if(evoChain.evolves_to[0].evolves_to.length != 0){
            evo3 = evoChain.evolves_to[0].evolves_to[0].species.name
        }
    }


   
    //console.log(evoChain)
    getEvolutions();

    console.log(evo1)
    console.log(evo2)
    console.log(evo3)
    return(
        <>test</>
    )
}

export default EvoChain;