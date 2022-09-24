import Image from 'next/image';

import { StyledHeader } from './MainHeader.styles';

interface Props {
  logo: any;
}

const MainHeader = ({ logo }: Props) => {
  return (
    <StyledHeader>
      <Image src={logo} width={144} height={32} objectFit="cover"/>
    </StyledHeader>
  );
}

export default MainHeader;
