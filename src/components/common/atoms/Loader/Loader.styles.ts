import styled from '@emotion/styled';

// Reference: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_loader
export const StyledDivLoader = styled.div<{ color: 'primary' | 'dark' | 'light', size: number }>`
  border: 4px solid transparent;
  border-radius: 50%;
  border-top: 4px solid ${({ theme, color }) => theme.colors[color][100]};

  width: 24px;
  height: 24px;
  -webkit-animation: spin 1s linear infinite; /* Safari */
  animation: spin 1s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
