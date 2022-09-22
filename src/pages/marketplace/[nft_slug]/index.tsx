import Image from 'next/image';

import { MainLayout } from "@/components/main/MainLayout";
import { nfts } from "@/mocks";
import { useRouter } from "next/router";
import { Button } from '@/components/common/atoms';

const NFTPage = () => {
  const { query: { nft_slug } } = useRouter();

  const nft = nfts.find(nft => nft.slug === nft_slug);

  if (!nft) return <MainLayout>Ops... não há nada por aqui</MainLayout> // TODO translate

  const router = useRouter();

  return (
    <MainLayout>
      <Image src={nft?.img} />

      <Button onClick={() => router.push(`${nft_slug}/?step=checkout`, undefined, { shallow: true })}>Teste checkout</Button>

      <Button onClick={() => router.push(`${nft_slug}/?step=success`, undefined, { shallow: true })}>Teste success</Button>

      {router.query.step}
    </MainLayout>
  );
};

export default NFTPage;
