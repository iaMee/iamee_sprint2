import React, { Component } from 'react';
import style from './DropButton.css';
import PropTypes from 'prop-types';

class DropButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [],
    };
  }

  getNavItems() {
    const array = this.state.navItems;
    console.log(array);

    this.setState({});
  }

  render() {
    return (
      <DropButton
        trigger={
          <Button>
            {this.props.buttonHeader}
            <Icon right>arrow_drop_down</Icon>
          </Button>
        }
      >
        {this.state.navItems.map(item => <NavItem>one</NavItem>)}
        <NavItem>one</NavItem>

        <NavItem>two</NavItem>

        <NavItem>three</NavItem>
      </DropButton>
    );
  }
}

DropButton.propTypes = {
  buttonHeader: PropTypes.string.isRequired,
};

export default DropButton;
