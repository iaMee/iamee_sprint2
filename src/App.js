import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import SignUp from 'containers/templates/SignUp/SignUp';
import ExperiencePage from 'containers/pages/ExperiencePage';
import Test from 'containers/templates/Test/Test';

import { ThemeProvider } from 'styled-components';
import { colors } from './styles/theme';

const history = createBrowserHistory();

const App = () => {
  return (
    <ThemeProvider theme={colors}>
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={SignUp} />
          <Route path="/experiences" component={ExperiencePage} />
          <Route path="/test" component={Test} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
