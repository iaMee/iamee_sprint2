import React from 'react';
import ButtonCircle from 'components/atoms/ButtonCircle';
import { Link } from 'react-router-dom';

// this is used to avoid warning for unknown props in link
// https://github.com/styled-components/styled-components/issues/135
const filteredLink = ({
  background,
  backgroundThemeColor,
  bold,
  capitalize,
  lineHeight,
  fullWidth,
  uppercase,
  ...rest
}) => <Link {...rest} />;

export default ButtonCircle.extend`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: ${props => props.lineHeight || props.height};
`.withComponent(filteredLink);
