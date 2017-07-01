import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import Home from './Pages/Home/Home';
import SignUp from './Pages/SignUp/SignUp';
import CreateTask from './Pages/CreateTask/CreateTask'
import Experience from './Pages/Experience/Experience';
import Dashboard from './Pages/Dashboard/Dashboard';
import Test from './Pages/Test/Test';

const history = createBrowserHistory()

class App extends Component {
  render() {
    const CreateTaskPage = (props) => {
      return(
        <CreateTask {...props} />
      )
    }
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/experiences" component={Experience}/>
            <Route exact path='/createtask' component={CreateTask}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/test" component={Test}/>
          </Switch>
        </div>
      </Router>
    );
  }
};

export default App;
