import Image from 'next/image';
import styled from '@emotion/styled';

import { MainLayout } from "@/components/main/MainLayout";
import { gunstarsGame, nfts } from "@/mocks";
import { useRouter } from "next/router";
import { Button, Card, Icon, Text } from '@/components/common/atoms';
import { theme } from '@/styles';
import { PricesBanner } from '@/components/common/organisms/NFTCard/NFTCard.styles';
import { GameChip, InfoDisplay } from '@/components/common/molecules';
import { CheckoutModal, CheckoutModalRef } from '@/components/common/organisms';
import { PurchaseModal, PurchaseModalRef } from '@/components/common/organisms';
import { useEffect, useRef } from 'react';

const NFTAttributesDisplay = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.extraSmall};

  @media (max-width: 540px) {
    flex-wrap: wrap;
  }
`;

const NFTDescriptionCard = styled(Card)`
  max-width: 30rem;
  max-height: 35rem;
  padding: ${({ theme }) => theme.spacing.huge};

  @media (max-width: 720px) {
    padding: ${({ theme }) => theme.spacing.large};
  }

  @media (max-width: 540px) {
    padding: ${({ theme }) => theme.spacing.medium};
  }
`;

const NFTImageAndBackBtn = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'goback image .';

  gap: ${({ theme }) => theme.spacing.large};

  @media (max-width: 720px) {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto;
    grid-template-areas: 'goback image';
  }

  @media (max-width: 540px) {
    grid-template-columns: auto;
    grid-template-rows: 1fr auto;
    grid-template-areas: 'goback' 'image';

    gap: ${({ theme }) => theme.spacing.extraSmall};
  }
`;

const NFTPage = () => {
  const { query: { nft_slug, step }, push } = useRouter();

  const checkoutModalRef = useRef<CheckoutModalRef>(null);
  const purchaseModalRef = useRef<PurchaseModalRef>(null);

  const nft = nfts.find(nft => nft.slug === nft_slug);

  useEffect(() => {
    if (step === 'checkout') checkoutModalRef.current?.open();
    if (step === 'purchase') purchaseModalRef.current?.open();
  }, [step]);

  if (!nft) return <MainLayout>Ops... não há nada por aqui</MainLayout> // TODO translate

  return (
    <MainLayout>
      <div style={{ display: 'flex', gap: theme.spacing.large, flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.large }}>
          <NFTImageAndBackBtn>
            <Button btnType="tertiary" style={{ height: 'fit-content', gridArea: 'goback' }} onClick={() => push('/marketplace')}>
              <Icon type="arrow"/>
            </Button>

            <Card maxWidth="30rem" maxHeight="30rem" style={{ gridArea: 'image' }}>
              <Image src={nft?.img} width={480} height={480}/>
            </Card>
          </NFTImageAndBackBtn>

          <Card >
            <h4>Attributes</h4>

            <NFTAttributesDisplay>
              <Card style={{ width: '100%' }}>
                <InfoDisplay title="Rarity" value="Rare" type="two-line" />
              </Card>

              <Card style={{ width: '100%' }}>
                <InfoDisplay title="Rarity" value="Rare" type="two-line" />
              </Card>

              <Card style={{ width: '100%' }}>
                <InfoDisplay title="Rarity" value="Rare" type="two-line" />
              </Card>

              <Card style={{ width: '100%' }}>
                <InfoDisplay title="Rarity" value="Rare" type="two-line" />
              </Card>
            </NFTAttributesDisplay>
          </Card>
        </div>

        <NFTDescriptionCard>
          <GameChip title={gunstarsGame.title} image={gunstarsGame.profileImage} /> {/* TODO simulate fetch of game */}

          <h1>{nft.title}</h1>

          <Card>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec orci tortor, ullamcorper in mi sit amet, faucibus blandit arcu. Morbi bibendum id nisi a posuere. Aliquam sollicitudin a mauris sit amet maximus.
            </Text>
          </Card>

          <Card>
            <PricesBanner> {/* TODO refactor into one organism */}
              {/* TODO InfoDisplay two-line-augmented */}
              <InfoDisplay type="two-line-augmented" title="SOL Price" value={`${nft.solPrice} SOL`} icon={{ type: 'solana_icon' }} />

              <InfoDisplay type="two-line-augmented" title="BRL Price" value={`${nft.brlPrice} BRL`} icon={{ type: 'brl_icon' }} />
            </PricesBanner>
          </Card>

          <Button onClick={() => push(`${nft_slug}/?step=checkout`)}>
            buy now
          </Button>
        </NFTDescriptionCard>
      </div>

      <CheckoutModal
        ref={checkoutModalRef}
        nft={nft}
        onCancel={() => push(`${nft_slug}`)}
        onProceedToPayment={() => push(`${nft_slug}/?step=purchase`)}
      />

      <PurchaseModal
        ref={purchaseModalRef}
        nft={nft}
        onCancel={() => push(`${nft_slug}`)}
        onContinue={() => push(`${nft_slug}/?step=purchase`)}
        onViewNFT={() => window.alert('Visualizando NFT (não implementado)')}
      />
    </MainLayout>
  );
};

export default NFTPage;
