import { StyledParagraph } from "./Text.styles";

interface Props {
  maxWidth?: string;
  children: React.ReactNode;
  color?: 'light' | 'dark';
  centered?: boolean;
}

const Text = ({ children, maxWidth, color = 'dark', centered = false }: Props) => {
  return (
    <StyledParagraph maxWidth={maxWidth} color={color} centered={centered}>
      {children}
    </StyledParagraph>
  );
}

export default Text;
