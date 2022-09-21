import Image from 'next/image';
import { CSSProperties } from 'react';

import { IconSVG, iconSVGs } from "./svgs";

export interface Props {
  type: IconSVG;
  size?: number
  style?: CSSProperties;
}

const Icon = ({ type, size = 24, style }: Props) => {
  return (
    <div style={{ width: size, height: size, ...style }}>
      <Image width={size} height={size} src={iconSVGs[type]} objectFit="fill" />
    </div>
  );
}

export default Icon;
