import { StyledParagraph } from "./Text.styles";

interface Props {
  children: React.ReactNode;
}

const Text = ({ children }: Props) => {
  return (
    <StyledParagraph>
      {children}
    </StyledParagraph>
  );
}

export default Text;
