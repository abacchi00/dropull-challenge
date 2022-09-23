import { StyledParagraph } from "./Text.styles";

interface Props {
  maxWidth?: string;
  children: React.ReactNode;
}

const Text = ({ children, maxWidth }: Props) => {
  return (
    <StyledParagraph maxWidth={maxWidth}>
      {children}
    </StyledParagraph>
  );
}

export default Text;
