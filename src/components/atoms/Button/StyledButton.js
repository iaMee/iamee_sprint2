import styled from "styled-components";

export default styled.button`
  border: 2px solid #222;
  padding: 0.5rem;
  border-radius: 3px;
  background: none;
  ${props => (props.fullWidth ? "width: 100%" : "")};
  ${props => (props.bold ? "font-weight: bold" : "")};
`;
