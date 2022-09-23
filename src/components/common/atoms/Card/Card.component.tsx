import { CSSProperties, MouseEventHandler } from "react";

import { StyledCard } from "./Card.styles";

interface Props {
  children: React.ReactNode;
  maxHeight?: string;
  maxWidth?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  style?: CSSProperties;
}

const Card = ({ children, ...rest }: Props) => {
  return (
    <StyledCard clickable={!!rest.onClick} {...rest}>
      {children}
    </StyledCard>
  );
}

export default Card;
