import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { buttonStyle } from 'styles/button';

// this is used to avoid warning for unknown props in link
// https://github.com/styled-components/styled-components/issues/135
const filteredLink = ({ bold, fullWidth, textTransform, ...rest }) =>
  <Link {...rest} />;

const LinkButton = styled(filteredLink)`
  ${buttonStyle};
  display: inline-block;
`;

export default LinkButton;
