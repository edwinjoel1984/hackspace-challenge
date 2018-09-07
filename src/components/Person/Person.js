import React from 'react'
import CustomSelect from './CustomSelect'

const Person = (props) => {
    return (
        <tr>
            <td>{props.info.id}</td>
            <td>{props.info.first_name}</td>
            <td>{props.info.last_name}</td>
            <td>{props.info.interests_hobbies}</td>
            <td>{<CustomSelect 
                    options={props.infoApps} 
                    changeOption={props.changeOption}
                    selectedApp={props.selectedApp}/>}</td>
        </tr>
            
        
    );
}


export default Person;