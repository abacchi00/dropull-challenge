import { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled'; // TODO remove

import { Divider, Input, Text } from "@/components/common/atoms";
import { InfoDisplay } from "@/components/common/molecules";
import { GameBanner, NFTCard } from "@/components/common/organisms";
import { MainLayout } from "@/components/main/MainLayout";

import { nfts, gunstarsGame, mockAsync } from "@/mocks";

import { NFTProduct } from '@/models/nftProduct';

import { theme } from "@/styles";

// TODO REFACTOR
const AfterBanner = styled.div`
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media(max-width: 720px) {
    padding: 0;
  }
`;

const Home = () => {
  const [searchNfts, setSearchResults] = useState<NFTProduct[]>([]);
  const [searchString, setSearchString] = useState<string | undefined>();

  const mockGetNfts = async () => await mockAsync().then(() => setSearchResults(nfts));

  const handleSearch = useCallback((str: string) => {
    if (!!str) setSearchResults(nfts.filter(nft => nft.title.toLowerCase().includes(str)));
    else setSearchResults(nfts);
  }, [searchString]);

  useEffect(() => {
    //On mount

    mockGetNfts();
  }, []);

  useEffect(() => {
    handleSearch(searchString);
  }, [searchString]);

  return (
    <MainLayout>
      <GameBanner {...gunstarsGame} backgroundImage={gunstarsGame.bannerImage} />

      <AfterBanner>{/* TODO refactor */}
        <div style={{ display: 'flex', gap: theme.spacing.large, flexWrap: 'wrap' }}>
          <InfoDisplay type="inline" icon={{ type: 'game_developer_icon' }} title="Developer:" value="Monomyto Game Studio" />

          <InfoDisplay type="inline" icon={{ type: 'released_icon' }} title="Released in:" value="10 jun 2022" />
        </div>

        <Text>
          Fight, explore and create the best strategy to survive epic battles with up to 36 players. Novel gameplay, combining a short learning curve with a high skill cap that a great Battle-Royale game deserves. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>

        <Divider />

        <Input placeholder="Search" onChange={(e) => setSearchString(e.target.value)} />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center', justifyContent: 'center' }}> {/* TODO refactor */}
          {searchNfts.map(nft => <NFTCard {...nft}/>)}

          {!searchNfts.length && <p>Ooops... não encontrei nenhum resultado para essa busca</p>}
        </div>
      </AfterBanner>
    </MainLayout>
  )
}

export default Home;
