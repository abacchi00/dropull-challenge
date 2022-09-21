import { DetailedHTMLProps, InputHTMLAttributes } from "react";

import { StyledInput } from "./Input.styles";

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

const Input = ({ ...rest }: Props) => {
  return (
    <StyledInput {...rest} />
  )
}

export default Input;
