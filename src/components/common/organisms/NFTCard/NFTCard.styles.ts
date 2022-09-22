import styled from '@emotion/styled';

export const PricesBanner = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.dark[300]};
  padding: 0.5rem 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;

export const ImageContainer = styled.div<{ backgroundImage: any }>`
  width: 17.5rem;
  height: 17.5rem;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 80%;

  background-image: url(${props => props.backgroundImage.src}); // only beacuse its a Next.js thing

  border-radius: ${({ theme }) => theme.borderRadius.small};

  &:hover {
    transition: all 0.4s;
    box-shadow: inset 0 -10rem 25rem -10rem #000000;

    > button {
      transition: all 0.4s;
      opacity: 100%;
      visibility: visible;
    }
  }

  padding: ${({ theme }) => theme.spacing.big};
  display: flex;
  align-items: flex-end;
  justify-content: center;

  > button {
    opacity: 0;
    visibility: hidden;
  }
`;
