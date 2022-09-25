import { GetNFTsService } from '@/services';

describe('The GetNFTsService', () => {
  const gameSlug = 'gunstars';
  const searchValue = 'armour';

  it('should return the right nfts when asked for', async () => {
    const nfts = await GetNFTsService.execute(gameSlug, searchValue);

    expect(nfts).toHaveLength(3);
  })

  it('should return and empty array when no NFT contains the searched value', async () => {
    const nfts = await GetNFTsService.execute(gameSlug, 'random-serach-value');

    expect(nfts).toHaveLength(0);
  })

  it('should return all of game\'s nfts when there is no search value', async () => {
    const nfts = await GetNFTsService.execute(gameSlug, '');

    expect(nfts.length).toBeGreaterThan(3);

    const nfts2 = await GetNFTsService.execute(gameSlug, undefined);

    expect(nfts.length).toBeGreaterThan(3);
  })
})
