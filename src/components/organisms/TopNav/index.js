import React from 'react';
import { Link } from 'react-router-dom';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';
import Logo from '../../../Assets/Images/navLogo.svg';
import iconLogout from '../../../Assets/Images/logout.svg';
import ButtonPlain from 'components/atoms/ButtonPlain';
import HiddenH1 from './HiddenH1';
import LogoWrapper from './LogoWrapper';
import NavOffset from './NavOffset';
import NavWrapper from './NavWrapper';

const TopNav = ({ onBackButtonClick, onLogoutButtonClick }) => {
  return (
    <div>
      <NavWrapper>
        <ButtonPlain onClick={onBackButtonClick}>
          <FaArrowLeft color="#fff" size="1.5rem" />
        </ButtonPlain>
        <Link to="/">
          <LogoWrapper src={Logo} alt="iaMee logo" />
          <HiddenH1>iaMee</HiddenH1>
        </Link>
        <ButtonPlain onClick={onLogoutButtonClick} className="btn-logout">
          <img alt="log out" src={iconLogout} />
        </ButtonPlain>
      </NavWrapper>
      <NavOffset />
    </div>
  );
};

export default TopNav;
