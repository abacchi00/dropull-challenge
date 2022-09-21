import arrowIcon from './arrow.svg';
import brlIcon from './brl_icon.svg';
import gameDevIcon from './game_developer_icon.svg';
import phantomIcon from './phantom_icon.svg';
import releasedIcon from './released_icon.svg';
import searchIcon from './search_icon.svg';
import solanaIcon from './solana_icon.svg';
import successIcon from './success.svg';

export type IconSVG = 'arrow' | 'brl_icon' | 'game_developer_icon' | 'phantom_icon' | 'released_icon' | 'search_icon' | 'solana_icon' | 'success';

export const iconSVGs: { [key in IconSVG]: any } = {
  arrow: arrowIcon,
  brl_icon: brlIcon,
  game_developer_icon: gameDevIcon,
  phantom_icon: phantomIcon,
  released_icon: releasedIcon,
  search_icon: searchIcon,
  solana_icon: solanaIcon,
  success: successIcon,
}
