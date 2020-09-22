import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/index'
import Letters from './pages/letters'
import 'bootstrap/dist/css/bootstrap.min.css';
import Addresses from './pages/addresses';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
  
            <Route exact path="/letters" component={Letters}></Route>

            <Route exact path="/addresses" component={Addresses}></Route>

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

