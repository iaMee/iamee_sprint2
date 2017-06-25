import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BaseButton from './components/Atoms/Buttons/BaseButton';
import BottomNav from './components/Molecules/BottomNav/BottomNav';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Route exact path="/" component={Homepage}/>
           <Route path="/signup" component={SignUp}/>
           <Route path="/experiences" component={ExperiencePage}/>
           <Route path="/createtask" component={CreateTask}/>
           <Route path="/dashboard" component={Dashboard}/>
        </div>
      </Router>
    );
  }
}

export default App;
