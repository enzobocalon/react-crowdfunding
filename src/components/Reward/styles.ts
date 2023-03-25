import styled, { css } from 'styled-components';

interface Props {
  disabled: boolean;
}

export const Container = styled.div<Props>`
  border: 1px solid #d7d7d7;
  padding: 1.5rem 2rem;
  border-radius: .5rem;

  & + & {
    margin-top: 2rem;
  }

  ${({disabled}) => disabled && css`
    opacity: 0.6;
  `};
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .value-field {
    color: ${({theme}) => theme.primary.moderateCyan};
    font-weight: 500;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    gap: .5rem;

    span {
      color: ${({theme}) => theme.neutral.darkGray};
    }
  }
`;