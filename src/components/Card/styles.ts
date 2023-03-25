import styled, {css} from 'styled-components';

interface Props {
  disabled: boolean;
}

export const Container = styled.div<Props>`
  border: 1px solid rgb(215, 215, 215);
  padding: 1.5rem 2rem;
  border-radius: .5rem;

  display: flex;
  align-items: flex-start;
  gap: 1rem;

  input[type='radio'] {
    width: 40px;
    height: 24px;
    appearance: none;
    outline: 1px solid rgb(215, 215, 215);
    border: 4px solid white;
    border-radius: 50%;
    cursor: pointer;
    transition: all .3s ease;

    :hover {
      outline-color: ${({theme}) => theme.primary.moderateCyan};
    }

    :checked {
      background-color: ${({theme}) => theme.primary.moderateCyan};
      outline-color: ${({theme}) => theme.primary.moderateCyan};
    }

    :disabled {
      cursor: not-allowed;

      :hover {
        outline-color: rgb(215, 215, 215);
      }
    }
  }

  & + & {
    margin-top: 2rem;
  }

  ${({disabled}) => disabled && css`
      opacity: 0.5;
    `};
`;

export const Content = styled.div`
  > .description {
    margin-top: 1rem;
  }
`;

export const Header = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    label {
      cursor: pointer;
      font-weight: bold;
      transition: all .3s ease;

      :hover {
        color: ${({theme, disabled}) => !disabled && theme.primary.moderateCyan};
      }
    }
    span {
      margin-left: 1rem;
      color: ${({theme}) => theme.primary.moderateCyan};
      font-weight: 500;
    }
  }

`;