import React from 'react';
import StyledButton from "./StyledButton";

const Button = ({ children, ...rest }) => {
  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
