import styled from 'styled-components';
import { media } from 'styles/media';

export default styled.div`
  display: flex;
  justify-content: space-between;

  .starfish {
    display: flex;
    div {
      line-height: 40px;
      padding-left: 10px;
    }
  }
  .progress-title {
    line-height: 26px;
    font-size: 18px;
  }
  .progress-bar {
    width: 50%;
    height: 26px;
    line-height: 26px;
    font-size: 18px;
  }
  &.activity {
    margin-bottom: 10px;
    .activity-description {
      font-size: 20px;
      line-height: 75px;
    }
    .activity-link {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      border: solid 2px #f2c94c;
      margin-top: 13px;
      &.disabled {
        border-color: #bdbdbd;
      }
      svg {
        margin-left: 3px;
      }
    }
  }
`;
