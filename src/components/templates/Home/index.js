import React from 'react';
import { Link } from 'react-router-dom';
import LinkCircle from 'components/atoms/LinkCircle';
import LinkButton from 'components/atoms/LinkButton';
import LinkRound from 'components/atoms/LinkRound';

import ActivityEntry from './ActivityEntry';
import Wrapper from './Wrapper';
import PetWrapper from './PetWrapper';
import RowWrapper from './RowWrapper';

import HiddenH2 from './HiddenH2';
import H3 from './H3';
import turtle from '../../../Assets/Images/turtle.png';
import starFish from '../../../Assets/Images/starfish.svg';
import FaAngleRight from 'react-icons/lib/fa/angle-right';


const getActivities = ({ activities }) => {
  if (!activities.length) {
    return (
      <div>
        <RowWrapper className="activity">
          <LinkCircle height="75px" to="" disabled></LinkCircle>
          <div className="activity-description">No activity yet</div>
          <div className="activity-link disabled">
            <FaAngleRight color="#BDBDBD" size="42" />
          </div>
        </RowWrapper>
        <LinkRound to="/experiences">Start a journey</LinkRound>      
      </div>
    );
  }else{
    return (
      <div>
        {activities.map(activity =>
          <RowWrapper className="activity" key={activity.key}>
            <LinkCircle height="75px" to={activity.link} backgroundThemeColor={activity.name} color="#121212" className="uppercase">{activity.name}</LinkCircle>
            <div className="activity-description">Enter Daily {activity.name}</div>
            <div className="activity-link">
              <Link to={activity.link}>
                <FaAngleRight color="#F4BA23" size="42" />
              </Link>            
            </div>
          </RowWrapper>
        )}
        <RowWrapper>
          <div className="progress-title">Streak Progress</div>
          <div className="progress-bar">
            <div className="streak-progress">1 / 21</div>
          </div>
        </RowWrapper>
      </div>
  );
  }

};
const getTitle = ({ activities }) => {
  if (!activities.length) {
    return (
      <div className="title no-activity">
        Hi I’m Hermi and I’ll be your buddy.
        Start a journey below to get going!
      </div>
    );
  }else{
    return (
      <div className="title">Life is too short to not smile</div>
    );

  }

};

const Home = ({ activities }) => {
  return (
    <Wrapper>
      <div>
        
        <PetWrapper>
          {getTitle({ activities })}
          <img src={turtle} alt="turtle" />
          <RowWrapper className="link_row">
            <LinkCircle to="/dashboard" height="75px"  background="#934FE9">SHOP</LinkCircle>
            <LinkCircle to="/dashboard" height="75px" background="#E94F4F" className="btn-dashboard">DASH<br/>BOARD</LinkCircle>
          </RowWrapper>
        </PetWrapper>
      </div>
      <RowWrapper>
        <div className="starfish">
          <img src={starFish}/> 
          <div>30 starpuffs</div>
        </div>
      </RowWrapper>
      <H3>CURRENT JOURNEY</H3>
      {getActivities({ activities })}
    </Wrapper>
  );
};

export default Home;
