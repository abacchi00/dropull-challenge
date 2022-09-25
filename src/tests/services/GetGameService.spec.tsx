import { GetGameService } from '@/services';

describe('The GetGameService', () => {
  it('should return the right game when asked for', async () => {
    const game = await GetGameService.execute('gunstars');

    expect(game).toBeTruthy();
    expect(game.title).toBe('Gunstars');
  })

  it('should return undefined the game asked for does not exist', async () => {
    const game = await GetGameService.execute('game-that-not-exists');

    expect(game).toBeFalsy();
    expect(game).toBe(undefined);
  })
})
