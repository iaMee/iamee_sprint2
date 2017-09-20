import styled from 'styled-components';
import { media } from 'styles/media';
import imgChat from 'assets/Images/no-activity-chat.svg';

const circleWidth = '68%';
const circleWidthTablet = '50%';

export const PetLinkRow = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: -14px;
  left: -20px;
  right: -20px;
`;

export const PetTitle = styled.div`
  position: absolute;
  color: ${props => props.theme.lightBlue};
  top: -32px;
  left: 0;
  right: 0;
  margin: auto;
`

export const PetTitleNoActivity = PetTitle.extend`
  height: 85px;
  width: 100%;
  margin-left: 45px;
  top: -30px;
  padding-top: 12px;
  background-image: url(${imgChat});
  background-size: 100%;
  background-repeat: no-repeat;
`

export const PetWrapper = styled.div`
  border: 3px solid ${props => props.theme.main};
  border-radius: 50%;
  width: ${circleWidth};
  padding-bottom: ${circleWidth};
  position: relative;
  height: 0;
  margin: auto;
  margin-bottom: 14px;
  margin-top: 30px;

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
    width: 65%;
    margin: auto;
  }
`;
