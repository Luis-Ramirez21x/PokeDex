


function Abilities({abilites}){

    return (
    <>
        <tr>
            <td>Abilities</td>
            <td> {abilities.map((ability) => {
                        return ability.ability.name + " ";
            })} </td>
        </tr>
    
    </>
    )
}

export default Abilities;