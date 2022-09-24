import { NFTProduct } from "@/models";

import { mockAsync, nfts } from "@/mocks";

class GetNFTsService {
  public static async execute(searchValue?: string): Promise<NFTProduct[]> {
    await mockAsync();

    if (!searchValue) return nfts;

    return nfts.filter(nft => nft.title.toLowerCase().includes(searchValue.toLowerCase()));
  }
}

export default GetNFTsService;
