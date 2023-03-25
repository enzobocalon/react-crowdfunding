import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, .5);

  > div {
    max-height: 95vh;
    overflow: auto;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
      margin-block: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: rgb(215, 215, 215);
      border-radius: 10px;
    }
  }
`;