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
import PointBanner from '../../Organisms/PointBanner/PointBanner';
import Banners from '../../Atoms/Banners/Banner';
import PersonalShow from '../PersonalShow/PersonalShow';

const history = createBrowserHistory()

class AspirationShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      user:
      {
        id: "something",
        points: 0,
      },
      activities: ['relaxed', 'bold', 'kind'],
      diary: ['positive', 'inquisitive'],
      personal: ['yourself', 'grateful', 'loving']
    }
  }

  render() {
    var match = this.props.match
    var user = this.state.user;

    const ShowComponent = (props) => {
      var title = match.params.experience.toLowerCase()
      var activities = this.state.activities
        if(activities.indexOf(title) >= 0){
          return(<ActivityShow {...props} params={match.params.experience}/>)
        }else if(this.state.diary.indexOf(title) >=0){
          return(<DiaryShow {...props} params={match.params.experience}/>)
        }else{
          return(<PersonalShow {...props} params={match.params.experience}/>)
        }
    }

    return (
      <div>
        <Banners id={match.params.experience.toLowerCase()} title={"Be " + match.params.experience}/>
        <PointBanner points={user.points}/>
        <Switch>
          <Route path={`${match.url}`} render={ShowComponent}/>
        </Switch>
      </div>
    );
  }
};

export default AspirationShow;
