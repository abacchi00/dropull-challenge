import Image from 'next/image';

import { IconSVG, iconSVGs } from "./svgs";

interface Props {
  type: IconSVG;
  size?: number
}

const Icon = ({ type, size = 24 }: Props) => {
  return (
    <div style={{ width: size, height: size }}>
      <Image width={size} height={size} src={iconSVGs[type]} objectFit="fill" />
    </div>
  );
}

export default Icon;
