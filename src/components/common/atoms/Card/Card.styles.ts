import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { ThemeSpacingOption } from '@/styles/theme/spacing';

interface StyledCardAttributes {
  maxWidth?: string;
  maxHeight?: string;
  backgroundColor?: 100 | 200 | 300 | 400;
  clickable: boolean;
  noBorder: boolean;
  highlight?: 'onHover' | 'always';
  padding?: ThemeSpacingOption;
  gap?: ThemeSpacingOption;
}

export const StyledCard = styled.div<StyledCardAttributes>`
  display: flex;
  flex-direction: column;

  border: ${({ theme, noBorder }) => !noBorder && `1px solid ${theme.colors.dark[300]}`};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  background-color: ${({ theme, backgroundColor }) => theme.colors.dark[backgroundColor]};

  padding: ${({ theme, padding }) => theme.spacing[padding ?? 'medium']};
  gap: ${({ theme, gap }) => theme.spacing[gap ?? 'medium']};

  max-width: ${props => props.maxWidth};
  max-height: ${props => props.maxHeight};

  ${({ clickable }) => clickable && css`cursor: pointer;`}

  ${({ highlight, theme }) => highlight === 'always' && css`box-shadow: 0 0 0.5rem ${theme.colors.light[100]};`}

  ${({ theme, highlight }) => highlight === 'onHover' && css`
    :hover {
      transition: all 0.2s;
      box-shadow: 0 0 0.5rem ${theme.colors.light[100]};
    }
  `}
`
