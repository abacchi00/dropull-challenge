import Image from 'next/image';

import { Card } from '@/components/common/atoms';

interface Props {
  img: any;
  title: string;
  solPrice: number;
  brlPrice: number;
}

const NFTCard = ({ img, title, solPrice, brlPrice }: Props) => {
  return (
    <Card maxWidth="320px" maxHeight="432px">
      <Image src={img} width={275} height={275} layout="fixed" objectFit="cover" />

      <p>{title}</p>

      {/* <PriceBanner solPrice={solPrice} brlPrice={brlPrice} /> */}
    </Card>
  );
}

export default NFTCard;
