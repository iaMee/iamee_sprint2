import ButtonRound from 'components/atoms/ButtonRound';
import { Link } from 'react-router-dom';

export default ButtonRound.extend`
  display: inline-block;
  line-height: ${props => props.height};
`.withComponent(Link);
