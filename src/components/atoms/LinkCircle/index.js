import ButtonCircle from 'components/atoms/ButtonCircle';
import { Link } from 'react-router-dom';

export default ButtonCircle.extend`
  display: inline-block;
  line-height: ${props => props.height};
`.withComponent(Link);
