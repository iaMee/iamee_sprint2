import styled from 'styled-components';
import PropTypes from 'prop-types';

const generateBackground = bg => `background: ${bg};`;

const getBackground = ({
  background,
  backgroundThemeColor,
  disabled,
  theme
}) => {
  if (disabled) {
    return generateBackground(theme.disabled);
  }

  if (backgroundThemeColor) {
    return generateBackground(theme[backgroundThemeColor]);
  }

  if (!background) {
    return generateBackground(theme.main);
  }

  if (Array.isArray(background)) {
    return background.map(generateBackground);
  }

  return generateBackground(background);
};

const ButtonRound = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  color: ${props => (props.disabled ? '#eee' : props.color)};
  border-radius: ${props => props.radius};
  border: 0;
  font-size: 20px;
  font-weight: bold;
  ${getBackground};
  ${props => props.capitalize && 'text-transform: capitalize;'};
`;

ButtonRound.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  radius: PropTypes.string
};

ButtonRound.defaultProps = {
  width: '100%',
  height: '38px',
  color: '#fff',
  radius: '30px'
};

export default ButtonRound;
