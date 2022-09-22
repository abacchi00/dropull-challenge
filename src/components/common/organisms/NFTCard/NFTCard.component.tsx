import { Button, Card } from '@/components/common/atoms';
import { InfoDisplay } from '@/components/common/molecules/InfoDisplay';
import { useRouter } from 'next/router';

import { ImageContainer, PricesBanner } from './NFTCard.styles';

interface Props {
  img: any;
  title: string;
  slug: string;
  solPrice: number;
  brlPrice: number;
}

const NFTCard = ({ img, title, solPrice, brlPrice, slug }: Props) => {
  const { push } = useRouter();

  const handleRedirect = () => {
    push({ pathname: 'marketplace/[nft_slug]', query: { nft_slug: slug } })
  };

  return (
    <Card maxWidth="320px" maxHeight="432px"> {/* é isson mesmo? */}
      <ImageContainer backgroundImage={img}>
        <Button btnType="secondary" onClick={handleRedirect}>
          buy now
        </Button> {/* TODO translate */}
      </ImageContainer>

      <p>{title}</p>

      <PricesBanner>
        <InfoDisplay type="two-line" title="SOL Price" value={`${solPrice} SOL`} icon={{ type: 'solana_icon' }} />

        <InfoDisplay type="two-line" title="BRL Price" value={`${brlPrice} BRL`} icon={{ type: 'brl_icon' }} />
      </PricesBanner>
    </Card>
  );
}

export default NFTCard;
