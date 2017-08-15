import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { buttonStyle } from 'styles/button';

const LinkButton =  styled(Link)`
  ${buttonStyle};

  &.${props => props.activeClassName} {
    background-color: ${props => props.theme.active};
  }
`;

LinkButton.propTypes = {
  activeClassName: PropTypes.string,
}

LinkButton.defaultProps = {
  activeClassName: 'active',
}

export default LinkButton;
