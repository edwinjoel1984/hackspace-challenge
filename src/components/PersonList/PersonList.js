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
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.persons.map((data)=>
                        <Person key={data._id} info={data} />
                    )}
                </tbody>
                </table>
            </div>  
        );
    }
}

export default PersonList;