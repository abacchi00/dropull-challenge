export type ThemeSpacingOption = 'tiny' | 'extraSmall' | 'small' | 'medium' | 'large' | 'big' | 'extraLarge';

export type ThemeSpacing = { [key in ThemeSpacingOption]: string };

export const spacing: ThemeSpacing = {
  tiny: '0.25rem',
  extraSmall: '0.5rem',
  small: '0.75rem',
  medium: '1rem',
  big: '1.5rem',
  large: '2rem',
  extraLarge: '2.5rem',
};
