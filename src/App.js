import React, { Component } from 'react';
import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom';

import Header from './components/Header/Header'
import PersonList from './components/PersonList/PersonList'
import ApplicationList from './components/ApplicationList/ApplicationList';

import services from './services.js'
import {getIndex} from './tools.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        persons : [],
        apps: [],
        relations:[],
        loading: true
     };
}
  componentWillMount(){
   this.fetchPeople();
   this.fetchApps();
  }
  fetchPeople() {
    services.people().then((json) => {
      this.setState({
        persons: json,
        loading: false
      })
    }).catch((error) => {
      console.error('ERROR', error)
    })
  }
  fetchApps() {
    services.apps().then((json) => {
      this.setState({
        apps: json,
        loading: false
      })
    }).catch((error) => {
      console.error('ERROR', error)
    })
  }
  changeOption(user_id,app_id){
    let currentUser = this.state.relations.filter(function(info){
      return info.user_id==user_id;
    });
    if(!currentUser.length){
      this.setState({
              relations: [...this.state.relations, {"user_id":user_id, "app_id":app_id}]
            })
    }else{
      // GET THE INDEX
      const index= getIndex(user_id,this.state.relations,'user_id');
      let new_relations_state= this.state.relations;
      new_relations_state[index]={"user_id":user_id, "app_id":app_id}
      this.setState({relations:new_relations_state})
    }
  }


  render() {
    const MyPersonList = (props) => <PersonList  
                                        persons={this.state.persons} 
                                        relations={this.state.relations} 
                                        apps={this.state.apps} 
                                        {...props} 
                                        changeOption={this.changeOption.bind(this)}/> 
    const MyApplicationList = (props) => <ApplicationList  
                                            persons={this.state.persons} 
                                            relations={this.state.relations}
                                            apps={this.state.apps} {...props}/> 
    return (
      <div className="App">
          <Router>
            <div>
            <Header total={this.state.persons.length} />
            <Switch>
                <Route exact path="/persons" component={MyPersonList} />
                <Route exact path="/applications" component={MyApplicationList} />
                <Route path="/" render={MyPersonList}/>
            </Switch> 
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
