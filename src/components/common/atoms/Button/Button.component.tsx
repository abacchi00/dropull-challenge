import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from "react";

import { Loader } from "../Loader";

import { ButtonTypes, StyledButton } from './Button.styles';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  btnType?: ButtonTypes;
  children: React.ReactNode;
  onClick?: (event: any) => any | Promise<any>; // TODO type event more carefully
}

const Button = ({ children, btnType = 'primary', onClick, ...rest }: Props) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async (event: any) => {
    if (!onClick) return;

    setLoading(true);

    await onClick(event);

    setLoading(false);
  };

  return (
    <StyledButton btnType={btnType} onClick={handleClick} loading={loading ? 1 : 0} {...rest}>
      {loading
        ? <Loader color={btnType == 'secondary' ? 'primary' : 'light'} />
        : <span>{children}</span>
      }
    </StyledButton>
  );
}

export default Button;
