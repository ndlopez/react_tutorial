import React, {Component} from "react";

const Table = (props) =>{
    const {characterData, removeMember} = props
    return (
        <table>
            <TableHeader />
            <TableBody characterData = {characterData} removeMember = {removeMember} />
        </table>
    )
}

const TableHeader = () =>{
    return(
        <thead><tr>
            <th>Name</th>
            <th>Position</th>
            <th>Email</th>
            <th>Action</th>
        </tr></thead>
    )
}
const TableBody = (props) =>{
    const rows = props.characterData.map((row,index)=>{
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>{row.email}</td>
                <td><button onClick={() => props.removeMember(index)}>Delete</button> </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

/*class Table extends Component{
    render(){
        const {characterData} = this.props
        return(
        <table>
            <TableHeader />
            <TableBody characterData={characterData}/>    
        </table>
        )
    }
}
*/
export default Table;