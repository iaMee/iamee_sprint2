import styled from "styled-components";

export default styled.button`
  border: 2px solid #222;
  padding: 0.5rem;
  border-radius: 3px;
  background: none;
  width: ${props => (props.fullWidth ? "100%" : "auto")};
  font-weight: ${props => (props.bold ? "bold" : "normal")};
`;
