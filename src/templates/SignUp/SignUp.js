import React, { Component } from 'react';
import styles from './SignUp.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import BaseButton from 'atoms/Buttons/BaseButton';
import { Input } from 'react-materialize';

class SignUp extends Component {
  render() {
    return (
      <div>
        <div className="logo-image">
          <img
            className="logo"
            src={require('assets/Images/logo.png')}
            alt=""
          />
        </div>

        <div>
          <div className="createTaskInput">
            <div>
              <Link to="/experiences">
                <BaseButton title={'SIGN UP WITH FACEBOOK'} />
              </Link>
            </div>

            <div className="spacer" />
            <h5 className="text-center">OR</h5>
            <div className="spacer" />

            <div className="addInput">
              <Input type={'email'} label={'EMAIL'} />
            </div>
            <div className="addInput">
              <Input type={'password'} label={'PASSWORD'} />
            </div>

            <div className="spacer" />
            <div className="spacer" />

            <div>
              <Link to="/experiences">
                <BaseButton title={'SIGN UP'} />
              </Link>
            </div>

            <p className="text-center">
              Already have an account? <strong>Log In</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
