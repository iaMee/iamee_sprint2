import React, { Component } from 'react';
import style from './Pill.css';
import PropTypes from 'prop-types';
import { Chip } from 'react-materialize';

class Pill extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Chip>
        <p className="margin-reset white-text">{this.props.tasks}</p>
      </Chip>
    );
  }
}

Pill.propTypes = {
  tasks: PropTypes.string.isRequired
};

export default Pill;
