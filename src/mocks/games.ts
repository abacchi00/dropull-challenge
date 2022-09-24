import bannerGunstars from '@/assets/images/PNG/banner_gunstars.png'
import faviconGunstars from '@/assets/images/PNG/gunstars_favicon.png'

import { Game } from '@/models'

export const games: Game[] = [
  {
    slug: 'gunstars',
    title: 'Gunstars',
    bannerImage: bannerGunstars,
    profileImage: faviconGunstars,
    description: 'Fight, explore and create the best strategy to survive epic battles with up to 36 players. Novel gameplay, combining a short learning curve with a high skill cap that a great Battle-Royale game deserves. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    developer: 'Monomyto Game Studio',
    released_in: '10 jun 2022',
  }
]
