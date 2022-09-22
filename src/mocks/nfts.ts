import { NFTProduct } from "@/models/nftProduct";

import friesImg from '@/assets/images/PNG/fries.png';
import cardboxImg from '@/assets/images/PNG/cardbox.png';
import skullManImg from '@/assets/images/PNG/skull_man_big.png';
import loliGirlImg from '@/assets/images/PNG/loli_girl.png';
import loudFashionImg from '@/assets/images/PNG/loud_fashion.png';
import loudSkarImg from '@/assets/images/PNG/loud_skar.png';
import forestMonkeyImg from '@/assets/images/PNG/forest_monkey.png';
import barbarianImg from '@/assets/images/PNG/barbarian.png';

export const nfts: NFTProduct[] = [
  { slug: 'fries', img: friesImg, title: 'Fries', solPrice: 2.00, brlPrice: 324.02 },
  { slug: 'cardbox', img: cardboxImg, title: 'Cardbox', solPrice: 2.75, brlPrice: 445.53 },
  { slug: 'skull-man', img: skullManImg, title: 'Skull Man', solPrice: 0.22, brlPrice: 35.64 },
  { slug: 'lolli-girl', img: loliGirlImg, title: 'Lolli Girl', solPrice: 1.00, brlPrice: 162.01 },
  { slug: 'loud-fashion', img: loudFashionImg, title: 'LOUD Fashion', solPrice: 5.00, brlPrice: 810.05 },
  { slug: 'loud-skar', img: loudSkarImg, title: 'LOUD Skar', solPrice: 4.00, brlPrice: 648.04 },
  { slug: 'forest-monkey', img: forestMonkeyImg, title: 'Forest Monkey', solPrice: 0.01, brlPrice: 1.62 },
  { slug: 'barbarian', img: barbarianImg, title: 'Barbarian', solPrice: 2.34, brlPrice: 379.10 },
];
