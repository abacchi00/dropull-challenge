import styled from '@emotion/styled';

export const AfterBanner = styled.div`
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media(max-width: 720px) {
    padding: 0;
  }
`;

export const NFTCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

export const GameInfoContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.large};
  flex-wrap: wrap;
`;

export const MarketplaceLoading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.medium};
`
