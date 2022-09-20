import { css } from "@emotion/react";
import { theme } from "./theme";

export const globalStyles = css`
  html {
    height: 100%;
    width: 100%;
  }

  body {
    height: inherit;
    width: inherit;
    font: normal 1rem Gotham, sans-serif;
    -webkit-font-smoothing: antialiased;
    color: ${theme.colors.light[100]};
    background: ${theme.colors.dark[100]};
  }

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 2px ${theme.colors.dark[300]};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.dark[400]};
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.dark[500]};
    transition: background 250ms;
  }
`;
