import { NFTProduct } from "@/models";

import { mockAsync, nfts } from "@/mocks";

class GetNFTsService {
  public static async execute(gameSlug: string, searchValue?: string): Promise<NFTProduct[]> {
    await mockAsync();

    if (!searchValue) return nfts.filter(nft => nft.gameSlug === gameSlug);

    return nfts.filter(nft => nft.title.toLowerCase().includes(searchValue.toLowerCase()) && nft.gameSlug === gameSlug);
  }
}

export default GetNFTsService;
