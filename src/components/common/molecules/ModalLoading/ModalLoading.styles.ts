import styled from '@emotion/styled';

export const UpperContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.extraSmall};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
