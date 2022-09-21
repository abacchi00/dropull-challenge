import { StyledCard } from "./Card.styles";

interface Props {
  maxWidth: string;
  maxHeight: string;
  children: React.ReactNode;
}

const Card = ({ children, maxWidth, maxHeight }: Props) => {
  return (
    <StyledCard maxWidth={maxWidth} maxHeight={maxHeight}>
      {children}
    </StyledCard>
  );
}

export default Card;
