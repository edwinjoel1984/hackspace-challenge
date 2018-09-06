import React, { Component } from 'react';
import './App.css';
import PersonList from './components/PersonList/PersonList'
import Header from './components/Header/Header'
import {BrowserRouter as Router,  Route} from 'react-router-dom';
import Applications from './components/Applications/Application';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        persons : [],
        loading: true
     };
}
  async componentWillMount(){
    const res = await fetch("https://private-e385e6-hackspace1.apiary-mock.com/persons");
    this.setState({
        persons: await res.json(),
        loading: false
    })
  }
  render() {
    const MyPersonList = (props) => <PersonList  persons={this.state.persons} {...props}/> 
    return (
      <div className="App">
          <Router>
            <div>
                <Header total={this.state.persons.length} />
                <Route exact path="/" component={MyPersonList} />
                <Route exact path="/persons" component={MyPersonList} />
                <Route exact path="/applications" component={Applications} />
            </div> 
          </Router>
          {/* <PersonList persons={this.state.persons} /> */}
      </div>
    );
  }
}

export default App;
