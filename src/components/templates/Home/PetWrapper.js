import styled from 'styled-components';
import { media } from 'styles/media';

const circleWidth = '80%';
const circleWidthTablet = '50%';

export default styled.div`
  border: 3px solid ${props => props.theme.main};
  border-radius: 50%;
  width: ${circleWidth};
  padding-bottom: ${circleWidth};
  position: relative;
  height: 0;
  margin: auto;

  ${media.tablet`
    width: ${circleWidthTablet};
    padding-bottom: ${circleWidthTablet};
  `};

  > img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
`;
