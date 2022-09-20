import Image from 'next/image';

import gunstarsLogo from '@/assets/images/SVG/gunstars_logo.svg';

import { StyledHeader } from './MainHeader.styles';

const MainHeader = () => {
  return (
    <StyledHeader>
      <Image src={gunstarsLogo} width="137px" height="30px" />
    </StyledHeader>
  );
}

export default MainHeader;
