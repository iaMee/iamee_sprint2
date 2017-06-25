import React, { Component } from 'react';

import style from './BottomNav.css';
import { Footer } from 'react-materialize';

import NavIcon from '../../Atoms/NavIcons/NavIcon';
import PropTypes from 'prop-types';

import FaHome from 'react-icons/lib/fa/home';
import FaBell from 'react-icons/lib/fa/bell';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';
import FaSearch from 'react-icons/lib/fa/search';
import FaUsers from 'react-icons/lib/fa/user';

// BottomNav which has NavIcon components. It requires a redirect path, iconImage and text
class BottomNav extends Component {
  render() {

    var FaIcon = React.createClass({
      render: function() {
        return <FaHome />
      }
    })

    return (
      <Footer className="navfooter">
        <NavIcon
          path="/home"
          iconImage={FaIcon}
          text="Home"
        />
        <NavIcon
          path="/notifications"
          iconImage={FaIcon}
          text="Notifications"
        />
        <NavIcon
          path="/create"
          iconImage={FaIcon}
          text="Create"
        />
        <NavIcon
          path="/find"
          iconImage={FaIcon}
          text="Find"
        />
        <NavIcon
          path="/buddies"
          iconImage={FaIcon}
          text="Buddies"
        />
      </Footer>
    );
  }
}

// BottomNav.propTypes = {
//   path: PropTypes.string.isRequired,
//   iconImage: PropTypes.element.isRequired,
//   text: PropTypes.string.isRequired
// }

export default BottomNav;
