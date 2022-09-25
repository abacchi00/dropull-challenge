import { GetNFTService } from '@/services';

describe('The GetNFTService', () => {
  const gameSlug = 'gunstars';
  const nftSlug1 = 'skull-man';
  const nftSlug2 = 'rook';

  it('should return the right nft when asked for', async () => {
    const nft = await GetNFTService.execute(gameSlug, nftSlug1);

    expect(nft).toBeTruthy();
    expect(nft.slug).toBe(nftSlug1);
    expect(nft.gameSlug).toBe(gameSlug);
  })

  it('should return undefined when the NFT asked for is not from the game asked for', async () => {
    const nft = await GetNFTService.execute(gameSlug, nftSlug2);

    expect(nft).toBeFalsy();
    expect(nft).toBe(undefined);
  })

  it('should return undefined when there is no NFT with the game asked for', async () => {
    const game = await GetNFTService.execute('game-slug-that-not-exists', nftSlug1);

    expect(game).toBeFalsy();
    expect(game).toBe(undefined);
  })

  it('should return undefined when there is no NFT with the slug asked for', async () => {
    const game = await GetNFTService.execute(gameSlug, 'slug-that-not-exists');

    expect(game).toBeFalsy();
    expect(game).toBe(undefined);
  })
})
