import styled from 'styled-components';

export default styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;

  > * + * {
    margin-top: 1rem;
  }
`
