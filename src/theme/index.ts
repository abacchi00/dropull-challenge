import '@emotion/react'
import { Theme } from '@emotion/react';

import { borderRadius, ThemeBorderRadius } from './borderRadius';
import { colors, ThemeColors } from './colors';

declare module '@emotion/react' {
  export interface Theme {
    colors: ThemeColors;
    borderRadius: ThemeBorderRadius;
  }
}

export const theme: Partial<Theme> = {
  colors,
  borderRadius,
};
