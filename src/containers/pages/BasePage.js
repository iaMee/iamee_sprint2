import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateTask from 'containers/templates/CreateTask/CreateTask';
import Experience from 'containers/templates/Experience/Experience';
import TopNav from 'containers/organisms/TopNav';
import BottomNav from 'components/organisms/BottomNav/BottomNav';
import AspirationShow from 'containers/templates/AspirationShow/AspirationShow';
import Completion from 'containers/templates/Completion';
import Home from 'containers/templates/Home';

const BasePage = ({ match }) => {
  return (
    <div>
      <TopNav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/experiences" component={Experience} />
        <Route
          exact
          path="/experiences/tasks/:experienceId"
          component={CreateTask}
        />
        <Route
          exact
          path="/experiences/tasks/:experienceId/completion"
          component={Completion}
        />
        <Route
          path="/experiences/:experience/show"
          component={AspirationShow}
        />
      </Switch>
      <BottomNav />
    </div>
  );
};

export default BasePage;
