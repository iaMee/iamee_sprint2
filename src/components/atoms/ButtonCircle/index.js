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

const ButtonCircle = styled.button`
  height: ${props => props.height};
  width: ${props => props.height};
  color: ${props => (props.disabled ? '#eee' : props.color)};
  border-radius: 50%;
  border: 0;
  ${getBackground} ${props =>
      props.capitalize && 'text-transform: capitalize;'};
`;

ButtonCircle.propTypes = {
  height: PropTypes.string,
  color: PropTypes.string
};

ButtonCircle.defaultProps = {
  height: '1rem',
  color: '#fff'
};

export default ButtonCircle;
