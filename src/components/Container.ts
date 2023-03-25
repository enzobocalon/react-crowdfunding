import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  background-color: white;
  padding: 1.5rem 2.5rem;
  border-radius: 0.5rem;
  border: 2px solid #f6f6f6;

  text-align: center;
  position: relative;

  h1 {
    margin-block: 1rem;
  }

  .description {
    color: ${({theme}) => theme.neutral.darkGray};
    margin-bottom: 2rem;
  }

  .center-out {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;