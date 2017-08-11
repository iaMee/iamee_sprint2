import styled from 'styled-components';
import { inputTextStyle } from 'styles/input';

const createVerticalMargin = verticalMargin => `margin: ${verticalMargin} 0`;

export default styled.label`
  display: block;
  ${props => (props.verticalMargin ? createVerticalMargin(props.verticalMargin) : '')};
`;
