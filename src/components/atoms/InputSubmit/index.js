import styled from 'styled-components';
import { buttonStyle } from 'styles/button';

export default styled.input.attrs({
  type: 'submit'
})`
  ${buttonStyle};
`;
