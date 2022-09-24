import bannerGunstars from '@/assets/images/PNG/banner_gunstars.png'
import faviconGunstars from '@/assets/images/PNG/gunstars_favicon.png'
import gunstarsLogo from '@/assets/images/SVG/gunstars_logo.svg';
import bannerChessDotCom from '@/assets/images/PNG/chess-dot-com_banner.webp'
import faviconChessDotCom from '@/assets/images/PNG/chess-dot-com_favicon.png'
import chessDotComLogo from '@/assets/images/PNG/chess-dot-com_logo.png';

import { Game } from '@/models'

export const games: Game[] = [
  {
    slug: 'gunstars',
    title: 'Gunstars',
    logoImage: gunstarsLogo,
    bannerImage: bannerGunstars,
    profileImage: faviconGunstars,
    description: 'Fight, explore and create the best strategy to survive epic battles with up to 36 players. Novel gameplay, combining a short learning curve with a high skill cap that a great Battle-Royale game deserves. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    developer: 'Monomyto Game Studio',
    released_in: '10 jun 2022',
  },
  {
    slug: 'chess-dot-com',
    title: 'Chess.com',
    logoImage: chessDotComLogo,
    bannerImage: bannerChessDotCom,
    profileImage: faviconChessDotCom,
    description: 'Chess is an abstract strategy game and involves no hidden information. It is played on a square chessboard with 64 squares arranged in an eight-by-eight grid. At the start, each player (one controlling the white pieces, the other controlling the black pieces) controls sixteen pieces: one king, one queen, two rooks, two bishops, two knights, and eight pawns. The object of the game is to checkmate the opponent\'s king, whereby the king is under immediate attack (in "check") and there is no way for it to escape. There are also several ways a game can end in a draw.',
    developer: 'Erik Allebest',
    released_in: 'may 2007',
  }
]
