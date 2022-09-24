import { NFTProduct } from "@/models";

import { mockAsync, nfts } from "@/mocks";

class GetNFTService {
  public static async execute(gameSlug: string, slug: string): Promise<NFTProduct | undefined> {
    await mockAsync();

    return nfts.find(nft => nft.slug === slug && nft.gameSlug === gameSlug);
  }
}

export default GetNFTService;
