import React from 'react'

const Person = (props) => {
    return (
        <tr>
            <td>{props.info.name.first}</td>
            <td>{props.info.name.last}</td>
            <td>{props.info.email}</td>
            <td>{props.info.age}</td>
        </tr>
            
        
    );
}


export default Person;