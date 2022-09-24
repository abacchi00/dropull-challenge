import { useEffect, useState } from 'react';

import { Divider, Input, Loader, Text } from '@/components/common/atoms';
import { GameBanner, InfoDisplay, PageLoader } from "@/components/common/molecules";
import { NFTCard } from '@/components/common/organisms';

import { useDebounce } from '@/hooks';

import { Game, NFTProduct } from "@/models";

import { AfterBanner, GameInfoContainer, NFTCardsContainer } from "./MarketplacePageTemplate.styles";

interface Props {
  nfts: NFTProduct[];
  nftsLoading: boolean;
  game: Game;
  onClickNFTCard: (nft: NFTProduct) => Promise<boolean>;
  onClickBuyNFT: (nft: NFTProduct) => void;
  onSearch: (searchValue: string) => void;
}

const MarketPlacePageTemplate = ({ nfts, game, onClickNFTCard, onClickBuyNFT, onSearch, nftsLoading }: Props) => {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    onSearch(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <>
      <GameBanner {...game} backgroundImage={game.bannerImage} />

      <AfterBanner>
        <GameInfoContainer>
          <InfoDisplay
            type="inline"
            icon={{ type: 'game_developer_icon' }}
            title="Developer:" // TODO i18n
            value={game.developer}
          />

          <InfoDisplay
            type="inline"
            icon={{ type: 'released_icon' }}
            title="Released in:"
            value={game.released_in} // TODO i18n
          />
        </GameInfoContainer>

        <Text maxWidth="50%">
          {game.description}
        </Text>

        <Divider />

        <Input
          placeholder="Search" // TODO i18n
          onChange={event => setSearch(event.target.value)}
        />

        <NFTCardsContainer>
          {!nftsLoading && nfts.map(nft => (
            <NFTCard
              handleClick={() => onClickNFTCard(nft)}
              handleBuyNow={() => onClickBuyNFT(nft)}
              {...nft}
            />
          ))}

          {!nftsLoading && !nfts.length && <p>Oops... no results for this search</p>} {/* TODO translate */}

          {nftsLoading && <PageLoader loadingMessage="Searching NFTs..." />} {/* TODO translate */}
        </NFTCardsContainer>
      </AfterBanner>
    </>
  );
};

export default MarketPlacePageTemplate;
