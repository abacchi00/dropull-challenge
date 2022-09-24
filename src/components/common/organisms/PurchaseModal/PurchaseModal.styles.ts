import styled from '@emotion/styled';

export const ModalTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.extraSmall};
`;

export const ModalTitle = styled.h4`
  text-align: center;
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
`;
