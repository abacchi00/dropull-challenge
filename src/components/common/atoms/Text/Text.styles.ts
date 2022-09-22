import styled from '@emotion/styled';

export const StyledParagraph = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.colors.dark[400]};
  max-width: 50%;

  @media (max-width: 1140px) {
    max-width: none;
  }
`;
