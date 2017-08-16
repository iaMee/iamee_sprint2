import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { buttonStyle } from 'styles/button';

const LinkButton =  styled(Link)`
  ${buttonStyle};
`;

export default LinkButton;
