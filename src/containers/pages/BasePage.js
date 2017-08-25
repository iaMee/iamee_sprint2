import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateTask from 'containers/templates/CreateTask/CreateTask';
import Experience from 'containers/templates/Experience/Experience';
import TopNav from 'containers/organisms/TopNav';
import BottomNav from 'components/organisms/BottomNav/BottomNav';
import AspirationShow from 'containers/templates/AspirationShow/AspirationShow';

const BasePage = ({ match }) => {
  return (
    <div>
      <TopNav />
      <Switch>
        <Route exact path={`${match.url}`} component={Experience} />
        <Route path={`${match.url}/tasks/:taskId`} component={CreateTask} />
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
