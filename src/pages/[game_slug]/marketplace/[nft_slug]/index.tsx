import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { NFTPageTemplate } from '@/components/common/templates';
import { MainLayout } from "@/components/main/MainLayout";

import { Game, NFTProduct } from "@/models";

import { GetGameService, GetNFTService, StartCheckoutService, StartPurchaseService } from "@/services";

const NFTPage = () => {
  const { query: { game_slug, nft_slug, step }, push } = useRouter();

  const [game, setGame] = useState<Game | undefined>()
  const [nft, setNft] = useState<NFTProduct | undefined>()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // On Mount
    setLoading(true);

    (async () => await GetGameService.execute(game_slug as string).then(game => {
      setLoading(false);

      setGame(game)
    }))()
  }, [game_slug]);

  useEffect(() => {
    // On Mount
    setLoading(true);

    (async () => await GetNFTService.execute(game_slug as string, nft_slug as string).then(nft => {
      setLoading(false);

      setNft(nft)
    }))()
  }, [nft_slug]);

  return (
    <MainLayout
      logo={game?.logoImage}
      loadingPage={loading}
      noContent={!nft || !game}
      loadingMessage="Loading Data..." // TODO translate
      noContentMessage="Oops... there is nothing here!" // TODO translate
    >
      <NFTPageTemplate
        nft={nft}
        game={game}
        step={step as string}
        onGoBack={() => push(`/${game.slug}/marketplace`)}
        onClickBuyNow={() => push(`/${game.slug}/marketplace/${nft.slug}/?step=checkout`)}
        onCheckoutCancel={() => push(`/${game.slug}/marketplace/${nft.slug}`)}
        onCheckoutProceedToPayment={() => push(`/${game.slug}/marketplace/${nft.slug}/?step=purchase`)}
        onPurchaseCancel={() => push(`/${game.slug}/marketplace/${nft.slug}`)}
        onPurchaseContinue={() => push(`/${game.slug}/marketplace/${nft.slug}/?step=purchase`)}
        onPurchaseViewNFT={() => window.alert('Viewing NFT')}
        onStartCheckout={StartCheckoutService.execute}
        onStartPurchase={StartPurchaseService.execute}
      />
    </MainLayout>
  );
};

export default NFTPage;
