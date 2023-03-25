import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  transform: translateY(-115px);
  padding-inline: 1rem;

  > div:not(:first-of-type) {
    margin-top: 2rem;
  }
`;