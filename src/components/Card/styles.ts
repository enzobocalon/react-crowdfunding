import styled, {css} from 'styled-components';

interface Props {
  disabled: boolean;
}

export const Container = styled.div<Props>`
  border: 1px solid rgb(215, 215, 215);
  border-radius: .5rem;

  input[type='radio'] {
    width: 40px;
    height: 24px;
    appearance: none;
    outline: 1px solid rgb(215, 215, 215);
    border: 4px solid white;
    border-radius: 50%;
    cursor: pointer;
    transition: all .3s ease;

    @media (max-width: 768px) {
      min-height: 32px;
      min-width: 32px;
    }

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

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1.5rem 2rem;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    padding: 1.5rem 1rem;
  }
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


  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    > div {
      display: flex;
      flex-direction: column;

      span {
        margin-inline: 0;
      }

      label {
        text-align: left;
      }
    }
  }
`;

export const ActionContainer = styled.div`
  border-top: 1px solid rgb(215, 215, 215);
`;

export const Actions = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const InputContainer = styled.div`
  padding: .75rem .5rem;
  border-radius: 2rem;
  border: 1px solid rgb(215, 215, 215);

  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex: 1;
  }
  
  label {
    margin-left: .5rem;
    color: rgb(215, 215, 215);
    font-weight: 500;
  }

`;

export const Input = styled.input`
  max-width: 50px;
  font-size: 1rem;
  outline: none;
  border: none;
  font-family: inherit;
  color: ${({theme}) => theme.neutral.black};
  font-weight: bold;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=number] {
    -moz-appearance: textfield;
  }
`;

export const Error = styled.div`
  padding: 0rem 2rem;
  color: #FF0000;
  text-align: right;
  
  p {
    margin-block: .5rem;
  }
`;