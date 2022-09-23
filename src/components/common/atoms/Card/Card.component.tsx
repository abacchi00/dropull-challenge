import { CSSProperties, MouseEventHandler } from "react";

import { StyledCard } from "./Card.styles";

interface Props {
  children: React.ReactNode;
  maxHeight?: string;
  maxWidth?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  backgroundColor?: 100 | 200 | 300 | 400;
  style?: CSSProperties;
  noBorder?: boolean;
}

const Card = ({ children, backgroundColor = 200, noBorder = false, ...rest }: Props) => {
  return (
    <StyledCard clickable={!!rest.onClick} backgroundColor={backgroundColor} noBorder={noBorder} {...rest }>
      {children}
    </StyledCard>
  );
}

export default Card;
