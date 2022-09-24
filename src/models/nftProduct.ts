export interface NFTProduct {
  img: any;
  title: string;
  solPrice: number;
  brlPrice: number;
  slug: string;
  rarity: 'common' | 'mythic' | 'rare';
  description: string;
  boostType: string;
  skinType: string;
  edition: string;
}
