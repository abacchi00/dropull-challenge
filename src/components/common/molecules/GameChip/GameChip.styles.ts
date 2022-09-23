import styled from '@emotion/styled';

export const ImageContainer = styled.div<{ backgroundImage: any }>`
  width: 2rem;
  height: 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.extraSmall};
  background-image: url(${props => props.backgroundImage.src});
  background-size: cover;
`;

export const ChipContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.extraSmall};
  padding: ${({ theme }) => `${theme.spacing.extraSmall} ${theme.spacing.medium} ${theme.spacing.extraSmall} ${theme.spacing.extraSmall}`};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.dark[300]};
  align-items: center;
  width: fit-content;
`
