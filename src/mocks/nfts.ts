import { NFTProduct } from "@/models";

import friesImg from '@/assets/images/PNG/fries.png';
import cardboxImg from '@/assets/images/PNG/cardbox.png';
import skullManImg from '@/assets/images/PNG/skull_man_big.png';
import loliGirlImg from '@/assets/images/PNG/loli_girl.png';
import loudFashionImg from '@/assets/images/PNG/loud_fashion.png';
import loudSkarImg from '@/assets/images/PNG/loud_skar.png';
import forestMonkeyImg from '@/assets/images/PNG/forest_monkey.png';
import barbarianImg from '@/assets/images/PNG/barbarian.png';

export const nfts: NFTProduct[] = [
  {
    slug: 'fries',
    img: friesImg,
    title: 'Fries Armour',
    solPrice: 2.00,
    brlPrice: 324.02,
    rarity: 'rare',
    boostType: '35% Armour',
    skinType: 'Fries',
    edition: 'First',
    description: 'I don´t think the Fries character is left behind CC. The Ring monster is named after Willy´s best friend Oskar who he has alot of scenes interacting with. I´m sure the mastermind Mothra ends up in the Council chamber and even if hisis necessary to make game playable or fun',
  },
  {
    slug: 'cardbox',
    img: cardboxImg,
    title: 'Cardbox Damage',
    solPrice: 2.75,
    brlPrice: 445.53,
    rarity: 'mythic',
    boostType: '12% Damage',
    skinType: 'Cardbox',
    edition: 'First',
    description: 'I don´t think the Cardbox is necessary to make game playable or fun, but the Less numbers of token limit will make for a better balance between red blaster gunblock player and purple, which is boosted by a powerful gunstar. 2 of the 3 colors are pretty weak against the 1.',
  },
  {
    slug: 'skull-man',
    img: skullManImg,
    title: 'Skull Man Armour',
    solPrice: 0.22,
    brlPrice: 35.64,
    rarity: 'rare',
    boostType: '8% Armour',
    skinType: 'Skull Man',
    edition: 'First',
    description: 'I don´t think the Skull man armour would look too different from the regular ones in terms of concept design, everything would be a bit more well suited to it. But this is a villager like armoured mouse while the Skull Barbarians looked more like Roggenroths with big plans to deal large single shots from their big armours.',
  },
  {
    slug: 'lolli-girl',
    img: loliGirlImg,
    title: 'Lolli Girl Damage',
    solPrice: 1.00,
    brlPrice: 162.01,
    rarity: 'common',
    boostType: '12% Damage',
    skinType: 'Lolli Girl',
    edition: 'First',
    description: 'I think the Lolli Girl Damagecop doll inspired Larry by making that paper item with her orange haired doll. We never talk about it, but it is pretty obvious that Jerry Brown is The Baller Doll. Tom Hayden and him would play a lot baseball.',
  },
  {
    slug: 'loud-fashion',
    img: loudFashionImg,
    title: 'LOUD Fashion Vitality',
    solPrice: 5.00,
    brlPrice: 810.05,
    rarity: 'rare',
    boostType: '36% Vitality',
    skinType: 'LOUD Fashion',
    edition: 'First',
    description: 'I think the LOUD Fashion Vitality can be used as a more "non threatening" alternative to the serious and significant faces of classical art. How do you feel when you go to a museum and your kids pull you away from a piece you love because they want you to take their picture in front of it?',
  },
  {
    slug: 'loud-skar',
    img: loudSkarImg,
    title: 'LOUD Skar Speed',
    solPrice: 4.00,
    brlPrice: 648.04,
    rarity: 'mythic',
    boostType: '10% Spped',
    skinType: 'LOUD Skar',
    edition: 'First',
    description: 'I think the LOUD Skar character probably had a bigger effect on the way I work than I realized. I like loud. All the Loud Skar drawings could have been brought into the Loud Character Project.',
  },
  {
    slug: 'forest-monkey',
    img: forestMonkeyImg,
    title: 'Forest Monkey Armour',
    solPrice: 0.01,
    brlPrice: 1.62,
    rarity: 'common',
    boostType: '8% Armour',
    skinType: 'Forest Monkey',
    edition: 'First',
    description: 'I think the Forest Monkey Armour could use some more definition to the horns to keep them from looking like skulls. I found the tail to be one of the most annoying parts. It looked way too long and twisted, and I could not get it to lay straight.',
  },
  {
    slug: 'barbarian',
    img: barbarianImg,
    title: 'Barbarian Vitality',
    solPrice: 2.34,
    brlPrice: 379.10,
    rarity: 'common',
    boostType: '10% Vitality',
    skinType: 'Barbarian',
    edition: 'First',
    description: 'I think the Barbarian Vitality means you want to attack the first thing you see or the last thing you see and you want to pay attention to whether you are killing it or running from it. And you have to pay attention to the ambiance of the moment and the things you can bring to bear to beat the fight.',
  },
];
