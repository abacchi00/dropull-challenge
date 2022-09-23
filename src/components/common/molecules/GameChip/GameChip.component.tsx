import { ChipContainer, ImageContainer } from './GameChip.styles';

interface Props {
  image: any;
  title: string;
}

const GameChip = ({ image, title }: Props) => {
  return (
    <ChipContainer>
      <ImageContainer backgroundImage={image} />

      {title}
    </ChipContainer>
  );
}

export default GameChip;
