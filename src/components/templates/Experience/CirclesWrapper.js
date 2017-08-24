import styled from 'styled-components';
import { media } from 'styles/media';

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 5rem;
  & > div {
    width: 50%;
    margin-bottom: 1rem;
    ${media.tablet`
      width: 33%;
    `};
  }
`;
