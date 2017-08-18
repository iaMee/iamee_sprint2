import ButtonCircle from 'components/atoms/ButtonCircle';

export default ButtonCircle.extend`
  & > * {
    line-height: ${props => props.height};
    margin: 0;
  }
`.withComponent('div');
