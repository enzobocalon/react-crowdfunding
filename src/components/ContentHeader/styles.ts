import styled from 'styled-components';

export const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const BookMarkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-right: 1rem;
  background-color: #f6f7f9;
  border-radius: 2rem;
  overflow: hidden;
  max-height: 56px;
  cursor: pointer;

  strong {
    opacity: .8;
    margin-bottom: 5px;
  }
`;

export const BookmarkIcon = styled.div``;