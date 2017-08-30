import React from 'react';
import LinkCircle from 'components/atoms/LinkCircle';
import LinkButton from 'components/atoms/LinkButton';
import Wrapper from './Wrapper';
import PetWrapper from './PetWrapper';
import HiddenH2 from './HiddenH2';
import H3 from './H3';
import turtle from 'assets/Images/turtle.png';

const getActivities = ({ activities }) => {
  if (!activities) {
    return null;
  }

  return (
    <ul>
      {activities.map(activity =>
        <li key={activity}>
          {activity}
        </li>
      )}
    </ul>
  );
};

const Home = ({ activities }) => {
  return (
    <Wrapper>
      <div>
        <HiddenH2>Home</HiddenH2>
        <PetWrapper>
          <img src={turtle} alt="turtle" />
        </PetWrapper>
        <LinkCircle to="/dashboard" height="6rem">
          Dashboard
        </LinkCircle>
      </div>
      <div>
        <H3>Today's activities</H3>
        {getActivities({ activities })}
        <LinkButton bold fullWidth textTransform="uppercase" to="/experiences">
          Add an activity
        </LinkButton>
      </div>
    </Wrapper>
  );
};

export default Home;
