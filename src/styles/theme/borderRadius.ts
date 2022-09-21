export type ThemeBorderRadiusOption = 'small' | 'medium';

export type ThemeBorderRadius = { [key in ThemeBorderRadiusOption]: string };

export const borderRadius: ThemeBorderRadius = {
  small: '0.75rem',
  medium: '1rem',
};
