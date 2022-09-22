import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

import { ButtonTypes, StyledButton } from './Button.styles';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  btnType?: ButtonTypes;
  children: React.ReactNode;
}

const Button = ({ children, btnType = 'primary', ...rest }: Props) => {
  return (
    <StyledButton btnType={btnType} {...rest}>
      <span>{children}</span>
    </StyledButton>
  );
}

export default Button;
