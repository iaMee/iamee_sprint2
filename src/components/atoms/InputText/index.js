import styled from 'styled-components';
import { inputTextStyle } from 'styles/input';

export default styled.input.attrs({
  type: props => props.type || 'text',
  placeholder: props => props.placeholder
})`
  ${inputTextStyle};
`;
