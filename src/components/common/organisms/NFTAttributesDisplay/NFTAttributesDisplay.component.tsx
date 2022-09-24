import { NFTProduct } from "@/models/nftProduct";

import { Card } from "@/components/common/atoms";
import { InfoDisplay } from "@/components/common/molecules";

import { NFTAttributes } from "./NFTAttributes.styles";

interface Props {
  nft: NFTProduct;
}

const NFTAttributesDisplay = ({ nft }: Props) => {
  return (
    <Card >
      <h4>Attributes</h4> {/* TODO i18n */}

      <NFTAttributes>
        <Card style={{ width: '100%' }}>
          <InfoDisplay
            title="Rarity" // TODO i18n
            value={nft.rarity[0].toUpperCase() + nft.rarity.slice(1)}
            type="two-line"
          />
        </Card>

        <Card style={{ width: '100%' }}>
          <InfoDisplay
            title="Boost type" // TODO i18n
            value={nft.boostType}
            type="two-line"
          />
        </Card>

        <Card style={{ width: '100%' }}>
          <InfoDisplay
            title="Skin type" // TODO i18n
            value={nft.skinType}
            type="two-line"
          />
        </Card>

        <Card style={{ width: '100%' }}>
          <InfoDisplay
            title="Edition" // TODO i18n
            value={nft.edition}
            type="two-line"
          />
        </Card>
      </NFTAttributes>
    </Card>
  );
}

export default NFTAttributesDisplay;
