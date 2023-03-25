import styled from 'styled-components';

export const ItemGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Item = styled.div`
  text-align: left;
  flex: 1;

  :first-of-type {
    flex: 1.5;
  }

  h1 {
    margin-block: .5rem;
  }

  & + & {
    padding-inline: 2rem;
  }

  :not(:last-of-type) {
    border-right: 1px solid #d1d1d1;
  }

  @media (max-width: 768px) {
    :not(:last-of-type) {
      border-right: none;
      border-bottom: 1px solid #d1d1d1;
      padding-bottom: 1rem;
    }
  }
`;

export const ProgressBarContainer = styled.div`
  min-height: 1rem;
  margin-top: 2rem;
  background-color: #f4f4f4;
  border-radius: 8px;
`;

export const ProgressBar = styled.div`
  width: 89%;
  height: 1rem;
  overflow: hidden;
  border-radius: 8px;
  background-color: ${({theme}) => theme.primary.moderateCyan};
`;