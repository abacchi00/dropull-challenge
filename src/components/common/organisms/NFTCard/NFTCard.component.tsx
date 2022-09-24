import { Button, Card } from '@/components/common/atoms';
import { InfoDisplay } from '@/components/common/molecules/InfoDisplay';

import { ImageContainer, PricesBanner } from './NFTCard.styles';

interface Props {
  img: any;
  skinType: string;
  solPrice: number;
  brlPrice: number;
  handleClick: () => void;
  handleBuyNow: () => void;
}

const NFTCard = ({ img, skinType, solPrice, brlPrice, handleBuyNow, handleClick }: Props) => {
  return (
    <Card maxWidth="20rem" maxHeight="27rem" onClick={handleClick}>
      <ImageContainer backgroundImage={img}>
        <Button btnType="secondary" onClick={event => { event.stopPropagation(); handleBuyNow() }}>
          buy now {/* TODO translate */}
        </Button>
      </ImageContainer>

      <p>{skinType}</p>

      <PricesBanner>
        <InfoDisplay type="two-line" title="SOL Price" value={`${solPrice} SOL`} icon={{ type: 'solana_icon' }} />

        <InfoDisplay type="two-line" title="BRL Price" value={`${brlPrice} BRL`} icon={{ type: 'brl_icon' }} />
      </PricesBanner>
    </Card>
  );
}

export default NFTCard;
