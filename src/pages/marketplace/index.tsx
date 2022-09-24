import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import { MainLayout } from "@/components/main/MainLayout";
import { MarketplacePageTemplate } from '@/components/common/templates';

import { gunstarsGame } from "@/mocks";

import { NFTProduct } from '@/models';

import { GetNFTsService } from '@/services';

const MarketplacePage = () => {
  const { push } = useRouter();

  const [NFTs, setNFTs] = useState<NFTProduct[]>([]);
  const [NFTsLoading, setNFTsLoading] = useState(false);

  const handleGetNfts = useCallback(async (searchValue?: string) => {
    setNFTsLoading(true);

    await GetNFTsService.execute(searchValue).then(nfts => setNFTs(nfts));

    setNFTsLoading(false);
  }, []);

  useEffect(() => {
    handleGetNfts(); // On Mount
  }, []);

  return (
    <MainLayout>
      <MarketplacePageTemplate
        nfts={NFTs}
        nftsLoading={NFTsLoading}
        game={gunstarsGame}
        onClickNFTCard={nft => push(`marketplace/${nft.slug}`)}
        onClickBuyNFT={nft => push(`marketplace/${nft.slug}?step=checkout`)}
        onSearch={handleGetNfts}
      />
    </MainLayout>
  )
}

export default MarketplacePage;
