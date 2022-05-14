import { Table, ProgressBar } from "react-bootstrap";


function BaseStats({stats}){

    return (
    <>
        <Table>
            <tbody>
                {stats.map((stat) => {
                    return(
                        <tr key={stat.stat.name}>
                            <td>{stat.stat.name}</td>
                            <td>{stat.base_stat}</td>
                            <td><ProgressBar now={stat.base_stat} /></td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    
    </>)
}

export default BaseStats;