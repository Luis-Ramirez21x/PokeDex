import { Table, ProgressBar } from "react-bootstrap";
import {capitalize} from '../../../../../App/Util/util'
import './BaseStats.css'

function BaseStats({stats, color}){

    return (
    <>
    <div className="table-div">
        <Table borderless={true}>
            <tbody>
                {stats.map((stat) => {
                    return(
                        <tr key={stat.stat.name}>
                            <td className={`stat-name ${color}Gradient`}>{capitalize(stat.stat.name)}</td>
                            <td className="stat-number">{stat.base_stat}</td>
                            <td className={`stat-bar ${color}bar`}><ProgressBar striped={true} now={stat.base_stat} /></td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    </div>
    
    </>)
}

export default BaseStats;