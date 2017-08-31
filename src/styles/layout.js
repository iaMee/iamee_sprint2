import { css } from 'styled-components';
import { spacing } from 'styles/variables';
import { minMaxSizes, media } from 'styles/media';

const templateWrapper = css`
  text-align: center;
  padding: 0 ${spacing.pageGutter} 2rem;

  ${media.tablet`
    max-width: ${minMaxSizes.tabletMin}px;
    margin: auto;
  `};
`;

export { templateWrapper };
