import styled from '@emotion/styled';

export const StyledParagraph = styled.p<{ maxWidth?: string }>`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.colors.dark[400]};
  max-width: ${({ maxWidth }) => maxWidth};

  @media (max-width: 1140px) {
    max-width: none;
  }
`;
