import styled from '@emotion/styled';

export const ModalTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.extraSmall};
`;

export const ModalTitle = styled.h4`
  text-align: center;
`

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AttributeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
