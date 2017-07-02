import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import ActivityShow from '../ActivityShow/ActivityShow';
import DiaryShow from '../DiaryShow/DiaryShow';
import PersonalShow from '../PersonalShow/PersonalShow';

const history = createBrowserHistory()

class AspirationShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      activities: ['relaxed', 'bold', 'kind'],
      diary: ['positive', 'inquisitive'],
      personal: ['yourself', 'grateful', 'loving']
    }
  }

  render() {
    var match = this.props.match
    const ShowComponent = (props) => {
      var title = match.params.experience.toLowerCase()
      var activities = this.state.activities
        if(activities.indexOf(title) >= 0){
          return(<ActivityShow {...props} params={match.params.experience}/>)
        }else if(this.state.diary.indexOf(title) >=0){
          return(<DiaryShow {...props} />)
        }else{
          return(<PersonalShow {...props}/>)
        }
    }

    return (
      <div>
        <Switch>
          <Route path={`${match.url}`} render={ShowComponent}/>
        </Switch>
      </div>
    );
  }
};

export default AspirationShow;
