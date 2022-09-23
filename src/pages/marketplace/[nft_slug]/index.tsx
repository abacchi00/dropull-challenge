import Image from 'next/image';

import { MainLayout } from "@/components/main/MainLayout";
import { nfts } from "@/mocks";
import { useRouter } from "next/router";
import { Button, Card, Icon, Text } from '@/components/common/atoms';
import { theme } from '@/styles';
import { PricesBanner } from '@/components/common/organisms/NFTCard/NFTCard.styles';
import { InfoDisplay } from '@/components/common/molecules';

const NFTPage = () => {
  const { query: { nft_slug, step }, push } = useRouter();

  const nft = nfts.find(nft => nft.slug === nft_slug);

  if (!nft) return <MainLayout>Ops... não há nada por aqui</MainLayout> // TODO translate

  return (
    <MainLayout>
      <div style={{ display: 'flex', gap: theme.spacing.large, flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: theme.spacing.large }}>
          <div style={{ display: 'flex', gap: theme.spacing.large }}>
            <Button btnType="tertiary" style={{ height: 'fit-content' }} onClick={() => push('/marketplace')}>
              <Icon type="arrow"/>
            </Button>

            <Card maxWidth="30rem" maxHeight="30rem">
              <Image src={nft?.img} width={480} height={480}/>
            </Card>

            <Button btnType="tertiary" style={{ height: 'fit-content', visibility: 'hidden' }}> {/* TODO TAKE OUT */}
              <Icon type="arrow"/>
            </Button>
          </div>

          <Card >
            <h4>Attributes</h4>

            <div style={{ display: 'flex', gap: theme.spacing.extraSmall }}>
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
            </div>
          </Card>
        </div>

        <Card maxWidth="30rem" maxHeight="35rem" style={{ padding: theme.spacing.huge }}>
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

          <Button onClick={() => push(`${nft_slug}/?step=checkout`, undefined, { shallow: true })}>
            buy now
          </Button>
        </Card>
      </div>

      {step}
    </MainLayout>
  );
};

export default NFTPage;

{/* <Button onClick={() => router.push(`${nft_slug}/?step=checkout`, undefined, { shallow: true })}>Teste checkout</Button>

<Button onClick={() => router.push(`${nft_slug}/?step=success`, undefined, { shallow: true })}>Teste success</Button> */}
