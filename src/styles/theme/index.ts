import '@emotion/react'
import { Theme } from '@emotion/react';

import { borderRadius, ThemeBorderRadius } from './borderRadius';
import { colors, ThemeColors } from './colors';
import { spacing, ThemeSpacing } from './spacing';

declare module '@emotion/react' {
  export interface Theme {
    colors: ThemeColors;
    borderRadius: ThemeBorderRadius;
    spacing: ThemeSpacing;
  }
}

export const theme: Partial<Theme> = {
  colors,
  borderRadius,
  spacing,
};
