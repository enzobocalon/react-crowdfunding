import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({theme}) => theme.primary.darkCyan};
  color: white;
  border-radius: 2rem;
  padding: 1rem 2rem;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all .3s ease;

  :hover {
    background-color: ${({theme}) => theme.primary.moderateCyan};
  }

  :disabled {
    background-color: ${({theme}) => theme.neutral.darkGray};
    cursor: not-allowed;
  }
`;