export type ThemeBorderRadiusOption = 'extraSmall' | 'small' | 'medium' | 'circle';

export type ThemeBorderRadius = { [key in ThemeBorderRadiusOption]: string };

export const borderRadius: ThemeBorderRadius = {
  extraSmall: '0.5rem',
  small: '0.75rem',
  medium: '1rem',
  circle: '50%',
};
