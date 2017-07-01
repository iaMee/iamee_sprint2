import React, { Component } from 'react';
import style from './CreateTask.css';
import TopNav from '../../Organisms/TopNav/TopNav';
import BottomNav from '../../Organisms/BottomNav/BottomNav';
import Circle from '../../Atoms/Circles/Circle';
import BaseButton from '../../Atoms/Buttons/BaseButton';
import Banner from '../../Atoms/Banners/Banner';
import { Row, Input, Button } from 'react-materialize'

class CreateTask extends Component {

  constructor() {
    super() 
    this.state = {
      experiences: 
      {
        title: "Relaxed",
        tasks: ["Meditation", "Reading", "Writing", "Art", "Dancing", "Hi" ], 
        newEmail: '',
        emailFormholder: 'Invite a Friend!'
      }
    }

    this.addNewEmail = this.addNewEmail.bind(this)
  }

    addNewEmail(){
      const URL = 'https://iamee.leaanthony.com/api/invite';
      axios.get(URL + '?email=' + this.state.newEmail)
      .then(
        this.setState({
          emailFormholder: "Your invite has been sent!"
        })
      )
    }

  render() {
    var experiences = this.state.experiences
    return(
      <div>

        <div className="topnav">
          <TopNav />
        </div>

        <Banner 
         title={experiences.title}
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
              <Input className="margin" type='select' defaultValue='1'>
                <option className="text-center" value='1'>Daily</option>
                <option value='2'>Weekly</option>
                <option value='3'>Monthly</option>
              </Input>
            </div>

            <div className="big-margin-top"></div>

          <div className="text-center margin-top">{this.state.emailFormholder}</div>

            <div className="margin-top">
              <Input 
                  type="email" 
                  label="Email" 
              />
               <Button 
                  floating 
                  large 
                  className='blue' 
                  waves='light' 
                  icon='add'
                  onClick={this.addNewEmail}
              />
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
            </div>

        <BottomNav />
      </div>
    )
  }
};

export default CreateTask;
