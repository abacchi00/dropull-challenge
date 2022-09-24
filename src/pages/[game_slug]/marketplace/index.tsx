import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

import { MarketplacePageTemplate } from '@/components/common/templates';
import { MainLayout } from "@/components/main/MainLayout";

import { Game, NFTProduct } from '@/models';

import { GetGameService, GetNFTsService } from '@/services';

const MarketplacePage = () => {
  const { push, query: { game_slug } } = useRouter();

  const [gameLoading, setGameLoading] = useState(true)
  const [game, setGame] = useState<Game | undefined>();
  const [NFTs, setNFTs] = useState<NFTProduct[]>([]);
  const [NFTsLoading, setNFTsLoading] = useState(true);

  const handleGetNfts = useCallback(async (searchValue?: string) => {
    setNFTsLoading(true);

    await GetNFTsService.execute(searchValue).then(nfts => setNFTs(nfts));

    setNFTsLoading(false);
  }, []);

  useEffect(() => {
    // On Mount
    setGameLoading(true);

    (async () => await GetGameService.execute(game_slug as string).then(game => {
      setGameLoading(false);

      setGame(game)
    }))()
  }, [game_slug]);

  useEffect(() => {
    handleGetNfts(); // On Mount
  }, []);

  return (
    <MainLayout
      loadingPage={gameLoading}
      noContent={!game}
      loadingMessage="Loading Game Data..." // TODO translate
      noContentMessage="Oops... there is nothing here!" // TODO translate
    >
      <MarketplacePageTemplate
        nfts={NFTs}
        nftsLoading={NFTsLoading}
        game={game}
        onClickNFTCard={nft => push(`/${game.slug}/marketplace/${nft.slug}`)}
        onClickBuyNFT={nft => push(`/${game.slug}/marketplace/${nft.slug}?step=checkout`)}
        onSearch={handleGetNfts}
      />
    </MainLayout>
  )
}

export default MarketplacePage;
