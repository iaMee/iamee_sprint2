import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Home from 'Templates/Home/Home';
import SignUp from 'Templates/SignUp/SignUp';
import ExperiencePage from 'Pages/ExperiencePage';
import Test from 'Templates/Test/Test';

const history = createBrowserHistory();

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route path="/experiences" component={ExperiencePage} />
          <Route path="/test" component={Test} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default App;
