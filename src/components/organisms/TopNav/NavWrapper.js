import styled from 'styled-components';
import { spacing } from 'styles/variables';
import navBackground from 'assets/Images/topNavBg.jpg';

export default styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-image: url(${navBackground});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  padding: 0 ${spacing.pageGutter};
`;
