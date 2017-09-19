import React from 'react';
import { Link } from 'react-router-dom';
import LinkCircle from 'components/atoms/LinkCircle';
import LinkRound from 'components/atoms/LinkRound';
import StreakProgress from 'components/atoms/StreakProgress';

import Wrapper from './Wrapper';
import PetWrapper, { LinkRow } from './PetWrapper';
import RowWrapper from './RowWrapper';
import StreakWrapper from './StreakWrapper';
import StreakTitle from './StreakTitle';

import H3 from './H3';
import turtle from 'assets/Images/turtle.png';
import starFish from 'assets/Images/starfish.svg';
import FaAngleRight from 'react-icons/lib/fa/angle-right';

const getEmptyActivity = () => (
  <div>
    <RowWrapper className="activity">
      <LinkCircle height="75px" to="" disabled />
      <div className="activity-description">No activity yet</div>
      <div className="activity-link disabled">
        <FaAngleRight color="#BDBDBD" size="42" />
      </div>
    </RowWrapper>
    <LinkRound to="/experiences">Start a journey</LinkRound>
  </div>
);

const getActivities = ({ activities, totalStreak }) => {
  if (!activities.length) {
    return getEmptyActivity();
  }

  return (
    <div>
      {activities.map(activity => (
        <RowWrapper className="activity" key={activity.key}>
          <LinkCircle backgroundThemeColor={activity.name} color="#121212" height="75px" to={activity.link} uppercase>
            {activity.name}
          </LinkCircle>
          <div className="activity-description">Enter Daily {activity.name}</div>
          <div className="activity-link">
            <Link to={activity.link}>
              <FaAngleRight color="#F4BA23" size="42" />
            </Link>
          </div>
        </RowWrapper>
      ))}
      <StreakWrapper>
        <StreakTitle>Streak Progress</StreakTitle>
        <StreakProgress>{totalStreak} / 21</StreakProgress>
      </StreakWrapper>
    </div>
  );
};

const getTitle = ({ activities }) => {
  if (!activities.length) {
    return (
      <div className="title no-activity">Hi I’m Hermi and I’ll be your buddy. Start a journey below to get going!</div>
    );
  }

  return <div className="title">Life is too short to not smile</div>;
};

const getStarPuff = ({ activities, totalStreak }) => <div>{totalStreak * 10} Starpuffs</div>;

const Home = ({ activities, totalStreak }) => {
  return (
    <Wrapper>
      <PetWrapper>
        {getTitle({ activities })}
        <img src={turtle} alt="turtle" />
        <LinkRow>
          <LinkCircle background="#934FE9" height="75px" to="/dashboard" uppercase>
            Shop
          </LinkCircle>
          <LinkCircle background="#E94F4F" height="75px" lineHeight="15px" to="/dashboard" uppercase>
            Dash<br />board
          </LinkCircle>
        </LinkRow>
      </PetWrapper>
      <RowWrapper>
        <div className="starfish">
          <img alt="starfish" src={starFish} />
          {getStarPuff({ activities, totalStreak })}
        </div>
      </RowWrapper>
      <H3>CURRENT JOURNEY</H3>
      {getActivities({ activities, totalStreak })}
    </Wrapper>
  );
};

export default Home;
