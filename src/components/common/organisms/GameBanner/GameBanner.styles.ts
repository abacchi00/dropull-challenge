import styled from '@emotion/styled';

export const BannerContainer = styled.div<{ backgroundImage: any }>`
  width: 100%;
  min-height: 20rem;

  border-radius: ${({ theme }) => theme.borderRadius.medium };
  padding: ${({ theme }) => theme.spacing.large };

  background-image: url(${props => props.backgroundImage.src}); // only beacuse its a Next.js thing
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 80%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.medium };

  box-shadow: 0 0 6rem 1rem #000 inset;

  @media (max-width: 540px) { // TODO breakpoint
    padding: ${({ theme }) => theme.spacing.medium };
    gap: ${({ theme }) => theme.spacing.small };
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
  }
`;

export const AvatarContainer = styled.div<{ backgroundImage: any }>`
  height: 5rem;
  width: 5rem;

  background-image: url(${props => props.backgroundImage.src}); // only beacuse its a Next.js thing

  border-radius: ${({ theme }) => theme.borderRadius.medium };
  border: 2px solid ${({ theme }) => theme.colors.dark[100]};

  @media (max-width: 540px) { // TODO breakpoint
    height: 4rem;
    width: 4rem;
  }
`;
