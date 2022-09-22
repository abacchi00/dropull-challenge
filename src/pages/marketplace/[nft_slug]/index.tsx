import Image from 'next/image';

import { MainLayout } from "@/components/main/MainLayout";
import { nfts } from "@/mocks";
import { useRouter } from "next/router";

const NFTPage = () => {
  const { query: { nft_slug } } = useRouter();

  const nft = nfts.find(nft => nft.slug === nft_slug);

  if (!nft) return <MainLayout>Ops... não há nada por aqui</MainLayout> // TODO translate

  return (
    <MainLayout>
      <Image src={nft?.img} />
    </MainLayout>
  );
};

export default NFTPage;
