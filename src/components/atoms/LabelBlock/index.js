import styled from 'styled-components';
import { inputTextStyle } from 'styles/input';

const createVertialMargin = verticalMargin => `margin: ${verticalMargin} 0`;

export default styled.label`
  display: block;
  ${props => (props.verticalMargin ? createVertialMargin(props.verticalMargin) : '')};
`;
