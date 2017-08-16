import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import CreateTask from 'containers/templates/CreateTask/CreateTask';
import Experience from 'containers/templates/Experience/Experience';
import TopNav from 'components/organisms/TopNav/TopNav';
import BottomNav from 'components/organisms/BottomNav/BottomNav';
import AspirationShow from 'containers/templates/AspirationShow/AspirationShow';

const history = createBrowserHistory();

class ExperiencePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var match = this.props.match;
    const Experiences = props => {
      return <Experience {...props} />;
    };

    const CreateTasks = props => {
      return <CreateTask {...props} />;
    };

    const AspirationShows = props => {
      return <AspirationShow {...props} />;
    };

    return (
      <div>
        <TopNav />
        <Switch>
          <Route exact path={`${match.url}`} render={Experiences} />
          <Route
            path={`${match.url}/:experience/createtask`}
            render={CreateTasks}
          />
          <Route
            path={`${match.url}/:experience/show`}
            render={AspirationShows}
          />
        </Switch>
        <BottomNav />
      </div>
    );
  }
}

export default ExperiencePage;
