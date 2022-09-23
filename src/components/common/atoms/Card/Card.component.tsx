import { MouseEventHandler } from "react";

import { StyledCard } from "./Card.styles";

interface Props {
  maxWidth: string;
  maxHeight: string;
  children: React.ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const Card = ({ children, ...rest }: Props) => {
  return (
    <StyledCard clickable={!!rest.onClick} {...rest}>
      {children}
    </StyledCard>
  );
}

export default Card;
