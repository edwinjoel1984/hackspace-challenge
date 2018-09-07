import React, { Component } from 'react'
import Application from '../Application/Application.js';
import './ApplicationList.css'

class ApplicationList extends Component {
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
                        <th>App Name</th>
                        <th>Members</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.apps.map((data)=>{
                        return <Application 
                                    key={data.id} 
                                    info={data} 
                                    persons={this.props.persons} 
                                    relations={this.props.relations}
                        />
                    }
                    )}
                </tbody>
                </table>
            </div>  
        );
    }
}

export default ApplicationList;