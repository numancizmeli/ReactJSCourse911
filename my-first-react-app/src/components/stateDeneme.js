import { useState } from "react"
const StateDeneme =(props)=>
{
   // let name = props.dataSource.name
   const [name, setName] = useState(props.dataSource.name)
    const changeValue =()=>
    {
        setName('yeni Deger')
    }

    return <table><tr><td>{name}</td></tr>
    <tr><td>
        <input type='button' value='Değiştir' onClick={changeValue}></input>
        </td></tr></table>
}

export default StateDeneme