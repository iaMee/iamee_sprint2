import React, { Component } from 'react';
import style from './CreateTask.css';
import TopNav from 'Organisms/TopNav/TopNav';
import BottomNav from 'Organisms/BottomNav/BottomNav';
import Circle from 'Atoms/Circles/Circle';
import BaseButton from 'Atoms/Buttons/BaseButton';
import Banner from 'Atoms/Banners/Banner';
import { Link } from 'react-router-dom';
import { Row, Input, Button } from 'react-materialize';
import axios from 'axios';
import AddForm from 'Molecules/InputForms/AddForm';

class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newEmail: '',
      emailFormholder: 'Invite a friend to be positive with you!'
    };

    this.addNewEmail = this.addNewEmail.bind(this);
  }

  componentDidMount() {
    this.forceUpdate();
    !document.getElementById('materialize-modal-overlay-1')
      ? null
      : (document.getElementById('materialize-modal-overlay-1').style.display =
          'none'); //remove modal overlay from previous
  }

  addNewEmail() {
    const URL = 'https://iamee.leaanthony.com/api/invite';
    axios.get(URL + '?email=' + this.state.newEmail).then(
      this.setState({
        emailFormholder: 'Your invite has been sent!'
      })
    );
  }

  render() {
    var experiences = this.state.experiences;
    var match = this.props.match;

    return (
      <div>
        <Banner
          id={match.params.experience.toLowerCase()}
          title={match.params.experience}
        />

        {/*<div>
            {experiences.tasks.map(task =>
              <Pill
                tasks = {task}
              />
            )}
          </div>*/}

        <div className="text-center margin-top">Set Reminder Frequency</div>

        <div className="dropDown margin-top">
          <Input className="margin" type="select" defaultValue="1">
            <option className="text-center" value="1">
              Daily
            </option>
            <option value="2">Weekly</option>
            <option value="3">Monthly</option>
          </Input>
        </div>

        <div className="exp-button width-80 btn-blue">
          <BaseButton title={'SET REMINDER'} />
        </div>

        <br />
        <br />

        <div className="text-center">
          {this.state.emailFormholder}
        </div>

        {/*<div className="margin-top">
              <Input
                  type="email"
                  label="Email"
              />
               <Button
                  floating
                  large
                  className="inputEmail blue"
                  waves='light'
                  icon='add'
                  onClick={this.addNewEmail}
              />*/}
        {/*
              <FormGroup className="no-wrap">
                <Input className="activity-input" onChange={(e)=>this.changeEmail(e)} value={this.state.newEmail} type="activity" name="activity" id="activity" placeholder="Enter your friend's email address" />
                <Button
                  onClick={this.addNewEmail}
                  color="primary"
                  className="circle-button"
                  >
                    <FaPlus />
                  </Button>
              </FormGroup>*/}
        {/*</div>*/}

        <div className="createTaskInput">
          <div className="addInput">
            <Input type={'email'} label={"Enter your friend's email"} />
          </div>
        </div>

        <br />

        <div className="exp-button width-80 btn-blue">
          <BaseButton title={'INVITE MY FRIEND!'} />
        </div>

        <div className="big-margin-top width-80 btn-blue">
          <Link to={`/experiences/${match.params.experience}/show`}>
            <BaseButton title={'NEXT'} />
          </Link>
        </div>
        <div className="spacer" />
        <div className="spacer" />
      </div>
    );
  }
}

export default CreateTask;
