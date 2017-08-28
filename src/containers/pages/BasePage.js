import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateTask from 'containers/templates/CreateTask/CreateTask';
import Experience from 'containers/templates/Experience/Experience';
import TopNav from 'containers/organisms/TopNav';
import BottomNav from 'components/organisms/BottomNav/BottomNav';
import AspirationShow from 'containers/templates/AspirationShow/AspirationShow';
import Completion from 'containers/templates/Completion';

const BasePage = ({ match }) => {
  return (
    <div>
      <TopNav />
      <Switch>
        <Route exact path={`${match.url}`} component={Experience} />
        <Route
          exact
          path={`${match.url}/tasks/:taskId`}
          component={CreateTask}
        />
        <Route
          exact
          path={`${match.url}/tasks/:taskId/completion`}
          component={Completion}
        />
        <Route
          path={`${match.url}/:experience/show`}
          component={AspirationShow}
        />
      </Switch>
      <BottomNav />
    </div>
  );
};

export default BasePage;
