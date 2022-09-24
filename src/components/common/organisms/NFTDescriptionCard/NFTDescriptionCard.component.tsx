import { Game } from "@/models/game";
import { NFTProduct } from "@/models/nftProduct";
import { Button, Card, Text } from "../../atoms";
import { GameChip, InfoDisplay } from "../../molecules";
import { PricesBanner } from "../NFTCard/NFTCard.styles";

import { NFTDescriptionCardContainer } from "./NFTDescriptionCard.styles";

interface Props {
  nft: NFTProduct;
  game: Game;
  onBuyNow: () => void;
}

const NFTDescriptionCard = ({ game, nft, onBuyNow }: Props) => {
  return (
    <NFTDescriptionCardContainer>
      <GameChip title={game.title} image={game.profileImage} />

      <h1>{nft.title}</h1>

      <Card>
        <Text>
          {nft.description}
        </Text>
      </Card>

      <Card>
        <PricesBanner> {/* TODO refactor into one organism */}
          {/* TODO InfoDisplay two-line-augmented */}
          <InfoDisplay type="two-line-augmented" title="SOL Price" value={`${nft.solPrice} SOL`} icon={{ type: 'solana_icon' }} />

          <InfoDisplay type="two-line-augmented" title="BRL Price" value={`${nft.brlPrice} BRL`} icon={{ type: 'brl_icon' }} />
        </PricesBanner>
      </Card>

      <Button onClick={onBuyNow}>
        buy now
      </Button>
    </NFTDescriptionCardContainer>
  );
}

export default NFTDescriptionCard;
