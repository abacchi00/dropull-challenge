import styled from '@emotion/styled';

export const NFTImageAndBackBtn = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: auto;
  grid-template-areas: 'goback image .';

  gap: ${({ theme }) => theme.spacing.large};

  @media (max-width: 720px) {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto;
    grid-template-areas: 'goback image';
  }

  @media (max-width: 540px) {
    grid-template-columns: auto;
    grid-template-rows: 1fr auto;
    grid-template-areas: 'goback' 'image';

    gap: ${({ theme }) => theme.spacing.extraSmall};
  }
`;

export const NFTPageTemplateContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.large};
  flex-wrap: wrap;
  justify-content: center;
`;

export const NFTPageTemplateFirstSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.large};
`;
