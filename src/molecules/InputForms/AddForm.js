import React, { Component } from 'react';
import style from './AddForm.css';
import PropTypes from 'prop-types';
import { Input, Button } from 'react-materialize';

class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="addForm">
        <div className="addInput">
          <Input
            type={this.props.type}
            label={this.props.label}
            name={this.props.name}
            value={this.props.value}
            s={this.props.size}
            onChange={this.props.onChange}
          />
        </div>

        <div className="buttonInput">
          <Button
            floating
            large
            className="blue"
            waves="light"
            icon="add"
            onClick={this.props.onClick}
          />
        </div>
      </div>
    );
  }
}

AddForm.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  s: PropTypes.number,
  onChange: PropTypes.func,
  onClick: PropTypes.func
};

export default AddForm;
