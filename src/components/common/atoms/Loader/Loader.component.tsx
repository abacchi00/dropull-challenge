import { StyledDivLoader } from "./Loader.styles"

interface Props {
  color?: 'dark' | 'light' | 'primary';
  size?: number;
}

const Loader = ({ color = 'primary', size = 24 }: Props) => {
  return (
    <StyledDivLoader color={color} size={size} />
  );
};

export default Loader;
