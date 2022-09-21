import styled from '@emotion/styled';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.extraLarge};
`;

export const LayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: ${({ theme }) => `0 ${theme.spacing.large} ${theme.spacing.large} ${theme.spacing.large}`}
`
