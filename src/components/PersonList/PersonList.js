import React, { Component } from 'react'
import Person from '../Person/Person.js';
import './PersonList.css'

class PersonList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            persons : [],
            loading: true
         };
    }
    render() {
        return (
            <div className="list">
                <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Interests & Hobbies</th>
                        <th>Apps Involved</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.persons.map((data)=>{
                        let user_app=this.props.relations.filter(function(info){
                            return info.user_id==data.id;
                        });
                        if(!user_app.length)
                            user_app={user_id: data.id, app_id: ''};
                        else
                            user_app=user_app[0]
                        return <Person 
                                    key={data.id} 
                                    info={data} 
                                    infoApps={this.props.apps} 
                                    changeOption={this.props.changeOption} 
                                    selectedApp={user_app}/>
                        }
                    )}
                </tbody>
                </table>
            </div>  
        );
    }
}

export default PersonList;