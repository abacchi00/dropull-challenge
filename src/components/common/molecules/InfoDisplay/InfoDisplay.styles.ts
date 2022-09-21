import styled from '@emotion/styled';
import { InfoDisplayType } from './InfoDisplay.component';

export const DisplayContainer = styled.div<{ type: InfoDisplayType }>`
  grid-gap: ${({ theme }) => theme.spacing.extraSmall};
  width: 100%;
  height: fit-content;

  ${({ theme, type }) => {
    switch (type) {
      case 'inline': return 'display: flex; flex-direction: row';
      case 'two-line': case 'two-line-augmented': return `
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: 1.5rem 1fr;
        grid-template-areas: 'title title' 'icon value';
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
