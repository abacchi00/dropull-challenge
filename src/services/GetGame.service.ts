import { Game } from "@/models";

import { mockAsync, games } from "@/mocks";

class GetGameService {
  public static async execute(slug: string): Promise<Game | undefined> {
    await mockAsync();

    return games.find(game => game.slug === slug);
  }
}

export default GetGameService;
