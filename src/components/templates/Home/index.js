import React from "react";
import { Link } from "react-router-dom";
import LinkCircle from "components/atoms/LinkCircle";
import LinkButton from "components/atoms/LinkButton";
import ActivityEntry from "./ActivityEntry";
import Wrapper from "./Wrapper";
import PetWrapper from "./PetWrapper";
import HiddenH2 from "./HiddenH2";
import H3 from "./H3";
import turtle from "assets/Images/turtle.png";

const getActivities = ({ activities }) => {
  if (!activities) {
    return <div>No activity</div>;
  }

  return (
    <ul>
      {activities.map(activity =>
        <ActivityEntry key={activity.key}>
          <Link to={activity.link}>
            {activity.name}
          </Link>
        </ActivityEntry>
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
