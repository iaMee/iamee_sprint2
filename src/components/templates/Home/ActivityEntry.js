import styled from 'styled-components';

export default styled.li`
  display: block;
  line-height: 4;
  background: ${props => props.theme.light};
  text-transform: uppercase;

  & + & {
    border-top: 3px solid #fff;
  }

  a {
    color: #000;
  }
`;
