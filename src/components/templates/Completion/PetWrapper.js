import styled from 'styled-components';
import { media } from 'styles/media';

const circleWidth = '50%';
const bubbleWidth = '40%';
const bubbleWidth2 = '20%';

export default styled.div`
  border: 5px solid ${props => props.theme.main};
  border-radius: 60%;
  width: ${circleWidth};
  padding-bottom: ${circleWidth};
  position: relative;
  height: 0;
  margin-left: auto;
  margin-top: 30px;

  &:before {
    content: '';
    position: absolute;
    display: block;
    border: 5px solid ${props => props.theme.main};
    border-radius: 60%;
    width: ${bubbleWidth};
    padding-bottom: ${bubbleWidth};
    right: 100%;
    bottom: 70%;
  }
  &:after {
    content: '';
    position: absolute;
    display: block;
    border: 5px solid ${props => props.theme.main};
    border-radius: 60%;
    width: ${bubbleWidth2};
    padding-bottom: ${bubbleWidth2};
    right: 150%;
    bottom: 88%;
  }

  img.fish {
    position: absolute;
    width: 100%;
    right: 90%;
    top: 30%;
  }
  img.starpuffs {
    margin-top: 20px;
    width: 50%;
  }
  .starpuffs-text {
    font-size: 16px;
    line-height: 16px;
    margin-top: 5px;
  }
`;
