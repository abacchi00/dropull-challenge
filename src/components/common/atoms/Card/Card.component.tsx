import { StyledCard } from "./Card.styles";

interface Props {
  maxWidth: string;
  maxHeight: string;
  type?: 'primary' | 'secondary';
  children: React.ReactNode;
}

const Card = ({ children, maxWidth, maxHeight, type = 'primary' }: Props) => {
  return (
    <StyledCard maxWidth={maxWidth} maxHeight={maxHeight} type={type}>
      {children}
    </StyledCard>
  );
}

export default Card;
