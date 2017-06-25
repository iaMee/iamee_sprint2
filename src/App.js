import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import Home from './Pages/Home/Home';
import SignUp from './Pages/SignUp/SignUp';
import CreateTask from './Pages/CreateTask/CreateTask'
import Experience from './Pages/Experience/Experience';
import Dashboard from './Pages/Dashboard/Dashboard';
import Test from './Pages/Test/Test';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/experiences" component={Experience}/>
            <Route path="/createtask" component={CreateTask}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/test" component={Test}/>
          </Switch>
        </div>
      </Router>
    );
  }
};

export default App;
