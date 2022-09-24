import styled from '@emotion/styled';

export const NFTAttributes = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.extraSmall};

  @media (max-width: 540px) {
    flex-wrap: wrap;
  }
`;
