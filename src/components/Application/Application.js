import React from 'react'
import {getNameById} from '../../tools.js'

const Application = (props) => {
    
    let myRelations = props.relations.filter(function(data){
        return data.app_id==props.info.id;
    });
    let myRelationsMsg= ""
    let members=[];
    if(myRelations.length){
        myRelations.map((data)=>{
            members.push(getNameById(props.persons,data.user_id).first_name);
        })
        myRelationsMsg=members.join(',')
    }else{
        myRelationsMsg="-"
    }
    return (
        <tr>
            <td>{props.info.id}</td>
            <td>{props.info.name}</td>
            <td>{myRelationsMsg}</td>
        </tr>
    );
}


export default Application;