import styled from '@emotion/styled';

export const StyledParagraph = styled.p<{ maxWidth?: string, color: 'light' | 'dark', centered: boolean }>`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: unset;
  color: ${({ theme, color }) => color === 'dark' ? theme.colors.dark[400] : theme.colors.light[100]};
  max-width: ${({ maxWidth }) => maxWidth};
  text-align: ${({ centered }) => centered ? 'center' : 'auto'};

  span {
    color: ${({ theme, color }) => color === 'light' ? theme.colors.dark[400] : theme.colors.light[100]};
  }

  @media (max-width: 1140px) {
    max-width: none;
  }
`;
