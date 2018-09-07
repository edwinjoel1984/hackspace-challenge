import React from 'react';
const CustomSelect = (props) => {
    return (
        <select id="test" value={props.selectedApp.app_id} onChange={(e)=>props.changeOption(props.selectedApp.user_id,e.target.value)} >
            <option value=''>Select App</option>
            {props.options.map((option)=>(
                <option key={option.id} value={option.id}>{option.name}</option>
            ))}
        </select>
    )
};

export default CustomSelect;