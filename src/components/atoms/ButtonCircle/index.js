import styled from 'styled-components';
import PropTypes from 'prop-types';

const generateBackground = bg => `background: ${bg};`;

const getBackground = ({ background, backgroundThemeColor, theme }) => {
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
  color: ${props => props.color};
  ${getBackground} border-radius: 50%;
  ${props => props.capitalize && 'text-transform: capitalize;'}
  border: 0;
`;

ButtonCircle.propTypes = {
  height: PropTypes.string,
  color: PropTypes.string,
}

ButtonCircle.defaultProps = {
  height: '1rem',
  color: '#fff'
};

export default ButtonCircle;
