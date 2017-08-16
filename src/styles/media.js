import { css } from 'styled-components';

const sizes = {
  giant: 1224,
  desktop: 1024,
  tablet: 768,
  phone: 320
};

const minMaxSizes = {
  giantMin: sizes.giant,
  desktopMax: sizes.giant - 1,
  desktopMin: sizes.desktop,
  tabletMax: sizes.desktop - 1,
  tabletMin: sizes.tablet,
  phoneMax: sizes.tablet - 1
};

const createMinMedia = minWidth => {
  return (...args) => css`
    @media (min-width: ${minWidth}px) {
      ${css(...args)}
    }
  `;
};

const createMaxMedia = maxWidth => {
  return (...args) => css`
    @media (max-width: ${maxWidth}px) {
      ${css(...args)}
    }
  `;
};

const createMinMaxMedia = (minWidth, maxWidth) => {
  return (...args) => css`
    @media (min-width: ${minWidth}px) and (max-width: ${maxWidth}px) {
      ${css(...args)}
    }
  `;
};

const media = {
  phoneOnly: createMaxMedia(minMaxSizes.phoneMax),
  tablet: createMinMedia(minMaxSizes.tabletMin),
  tabletOnly: createMinMaxMedia(minMaxSizes.tabletMin, minMaxSizes.tabletMax),
  desktop: createMinMedia(minMaxSizes.desktopMin),
  desktopOnly: createMinMaxMedia(
    minMaxSizes.desktopMin,
    minMaxSizes.desktopMax
  ),
  giant: createMinMedia(minMaxSizes.giantMin)
};

export { minMaxSizes, media };
