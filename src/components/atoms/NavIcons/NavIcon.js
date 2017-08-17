import React, { Component } from 'react';
import style from './NavIcon.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FaHome from 'react-icons/lib/fa/home';
import FaBell from 'react-icons/lib/fa/bell';
import FaPlusCircle from 'react-icons/lib/fa/plus-circle';
import FaSearch from 'react-icons/lib/fa/search';
import FaUsers from 'react-icons/lib/fa/user';

const PlainButton = styled.button`
	background: none;
	border: none;
`;

const linkWrapper = path => props =>
	<Link to={path}>
		{props.children}
	</Link>;
const buttonWrapper = onClick => props =>
	<PlainButton onClick={onClick}>
		{props.children}
	</PlainButton>;

class NavIcon extends Component {
	render() {
		const Wrapper = this.props.path ? linkWrapper(this.props.path) : buttonWrapper(this.props.onClick);

		return (
			<div className="navicon-box" id={this.props.id}>
				<Wrapper>
					<div className="navicon-image">
						{this.props.iconImage}
					</div>
				</Wrapper>
			</div>
		);
	}
}

export default NavIcon;
