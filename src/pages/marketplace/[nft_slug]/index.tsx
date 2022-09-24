import { useRouter } from "next/router";

import { NFTPageTemplate } from '@/components/common/templates';
import { MainLayout } from "@/components/main/MainLayout";

import { gunstarsGame, nfts } from "@/mocks";

const NFTPage = () => {
  const { query: { nft_slug, step }, push } = useRouter();

  const nft = nfts.find(nft => nft.slug === nft_slug);

  if (!nft) return (
    <MainLayout>
      Oops... there is nothing here! {/* TODO translate */}
    </MainLayout>
  );

  return (
    <MainLayout>
      <NFTPageTemplate
        nft={nft}
        game={gunstarsGame}
        step={step as string}
        onGoBack={() => push('/marketplace')}
        onClickBuyNow={() => push(`${nft.slug}/?step=checkout`)}
        onCheckoutCancel={() => push(`${nft.slug}`)}
        onCheckoutProceedToPayment={() => push(`${nft.slug}/?step=purchase`)}
        onPurchaseCancel={() => push(`${nft.slug}`)}
        onPurchaseContinue={() => push(`${nft.slug}/?step=purchase`)}
        onPurchaseViewNFT={() => window.alert('Viewing NFT')}
      />
    </MainLayout>
  );
};

export default NFTPage;
