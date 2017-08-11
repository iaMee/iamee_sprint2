import styled from 'styled-components';
import { spacing } from 'styles/variables';
import { minMaxSizes, media } from 'styles/media';

export default styled.div`
  text-align: center;
  padding: 0 ${spacing.pageGutter};

  ${media.tablet`
    max-width: ${minMaxSizes.tabletMin}px;
    margin: auto;
  `};
`;
