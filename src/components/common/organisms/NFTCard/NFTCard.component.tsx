import Image from 'next/image';

import { Card } from '@/components/common/atoms';
import { InfoDisplay } from '@/components/common/molecules/InfoDisplay';

import { PricesBanner } from './NFTCard.styles';

interface Props {
  img: any;
  title: string;
  solPrice: number;
  brlPrice: number;
}

const NFTCard = ({ img, title, solPrice, brlPrice }: Props) => {
  return (
    <Card maxWidth="320px" maxHeight="432px"> {/* é isson mesmo? */}
      <Image src={img} width={275} height={275} layout="fixed" objectFit="cover" />

      <p>{title}</p>

      <PricesBanner>
        <InfoDisplay type="two-line" title="SOL Price" value={`${solPrice} SOL`} icon={{ type: 'solana_icon' }} />

        <InfoDisplay type="two-line" title="BRL Price" value={`${brlPrice} BRL`} icon={{ type: 'brl_icon' }} />
      </PricesBanner>
    </Card>
  );
}

export default NFTCard;
