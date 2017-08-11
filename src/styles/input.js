import { css } from 'styled-components';

const inputTextStyle = css`
  border: none;
  border-bottom: 2px solid ${props => props.theme.mid};
  background: none;
  padding: 8px;
  box-sizing: border-box;
  ${props => (props.fullWidth ? 'width: 100%' : '')};
  ${props => (props.bold ? 'font-weight: bold' : '')};

  &:before {
    content: '';
    box-sizing: border-box;
  }
`;

export { inputTextStyle };
