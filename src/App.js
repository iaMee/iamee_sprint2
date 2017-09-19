import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import SignUp from 'containers/templates/SignUp/SignUp';
import BasePage from 'containers/pages/BasePage';
import { firebase } from 'data/firebase';

import { ThemeProvider } from 'styled-components';
import { colors } from './styles/theme';

const history = createBrowserHistory();

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      user: null,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ loading: false, user });
    });
  }

  render() {
    return <ThemeProvider theme={colors}>{this.inner()}</ThemeProvider>;
  }

  inner() {
    const { loading, user } = this.state;
    if (loading) {
      return <div>Loading...</div>;
    } else if (!user) {
      return <SignUp />;
    } else {
      return (
        <Router history={history}>
          <Route path="/" component={BasePage} />
        </Router>
      );
    }
  }
}

export default App;
