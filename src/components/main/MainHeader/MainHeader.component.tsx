import Image from 'next/image';
import Link from 'next/link';

import { StyledHeader } from './MainHeader.styles';

interface Props {
  logo: any;
  logoRedirect: string;
}

const MainHeader = ({ logo, logoRedirect }: Props) => {
  return (
    <Link href={logoRedirect}>
      <StyledHeader>
        <Image src={logo} width={144} height={32} objectFit="cover" style={{ cursor: 'pointer' }}/>
      </StyledHeader>
    </Link>
  );
}

export default MainHeader;
