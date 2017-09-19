import React, { Component } from 'react';
import style from './CreateTask.css';
import BottomNav from 'components/organisms/BottomNav/BottomNav';
import Circle from 'components/atoms/Circles/Circle';
import BaseButton from 'components/atoms/Buttons/BaseButton';
import Banner from 'components/atoms/Banners/Banner';
import { Link } from 'react-router-dom';
import { Row, Input, Button } from 'react-materialize';
import AddForm from 'components/molecules/InputForms/AddForm';
import { firebase, base } from 'data/firebase';
import Relaxed from 'components/templates/CreateTask/Relaxed';
import Positive from 'components/templates/CreateTask/Positive';
import styled from 'styled-components';
import { templateWrapper } from 'styles/layout';

const components = {
  relaxed: Relaxed,
  positive: Positive,
};

const Wrapper = styled.main`${templateWrapper};`;

class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Component = components[this.props.match.params.experienceId];

    return (
      <Wrapper>
        <Component history={this.props.history} match={this.props.match} />
      </Wrapper>
    );
  }
}

export default CreateTask;
