import styled from '@emotion/styled';

export const BlurredBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;

  height: 100vh;
  width: 100vw;

  background-color: rgba(0, 0, 0, 0.5);

  backdrop-filter: blur(5px);
`;
