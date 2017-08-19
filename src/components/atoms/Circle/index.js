import ButtonCircle from 'components/atoms/ButtonCircle';

export default ButtonCircle.extend`
  display: table;
  & > * {
    display: table-cell;
    vertical-align: middle;
  }
`.withComponent('div');
