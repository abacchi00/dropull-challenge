import { theme } from '@/styles';
import Image from 'next/image';

import { AvatarContainer, BannerContainer } from './GameBanner.styles';

interface Props {
  backgroundImage: any;
  profileImage: any;
  title: string;
}

const GameBanner = ({ backgroundImage, profileImage, title }: Props) => {
  return (
    <BannerContainer backgroundImage={backgroundImage}>
      <AvatarContainer backgroundImage={profileImage} />

      <h2>{title}</h2>
    </BannerContainer>
  );
}

export default GameBanner;
