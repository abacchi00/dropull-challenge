import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { InfoDisplayType } from './InfoDisplay.component';

export const DisplayContainer = styled.div<{ type: InfoDisplayType, hasIcon: boolean }>`
  grid-gap: ${({ theme }) => theme.spacing.extraSmall};
  width: 100%;
  height: fit-content;

  ${({ theme, type, hasIcon }) => {
    switch (type) {
      case 'inline': return css`
        display: flex;
        gap: ${theme.spacing.extraSmall};
        align-items: center;

        width: max-content;
      `;
      case 'two-line': case 'two-line-augmented': return css`
        display: grid;
        grid-template-rows: ${hasIcon ? 'auto auto' : 'auto'};
        grid-template-columns: ${hasIcon ? '1.5rem 1fr' : '1fr'};
        grid-template-areas: ${hasIcon ? '"title title" "icon value"' : '"title" "value"'};
      `;
    }
  }};
`;

export const InfoTitle = styled.div`
  color: ${({ theme }) => theme.colors.dark[400]};
  font-size: 0.875rem;

  grid-area: title;
`;

export const InfoValue = styled.div`
  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
  align-items: center;

  grid-area: value;
`;
