import { ThemeProvider } from "@emotion/react";

import { theme } from "@/styles";

interface Props {
  children: React.ReactNode;
}

const EmotionThemeMock = ({ children }: Props) => {
  return (<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}

export default EmotionThemeMock;
