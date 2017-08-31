import { css } from 'styled-components';

const buttonStyle = css`
  border: 2px solid ${props => props.theme.main};
  color: ${props => props.theme.main};
  padding: 0.5rem;
  border-radius: 3px;
  background: none;
  ${props => (props.fullWidth ? 'width: 100%' : '')};
  ${props => (props.bold ? 'font-weight: bold' : '')};
  ${props => props.textTransform && `text-transform: ${props.textTransform};`}
`;

export { buttonStyle };
