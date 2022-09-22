import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from "react";

import { Loader } from "../Loader";

import { ButtonTypes, StyledButton } from './Button.styles';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  btnType?: ButtonTypes;
  children: React.ReactNode;
  onClick?: () => void | Promise<void>;
}

const Button = ({ children, btnType = 'primary', onClick, ...rest }: Props) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if (!onClick) return;

    setLoading(true);

    await onClick();

    setLoading(false);
  };

  return (
    <StyledButton btnType={btnType} onClick={handleClick} loading={loading} {...rest}>
      {loading
        ? <Loader color={btnType == 'secondary' ? 'primary' : 'light'} />
        : <span>{children}</span>
      }
    </StyledButton>
  );
}

export default Button;
