import styled from '@emotion/styled';

export const SuccessContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.extraSmall};
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.dark[100]};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

export const SuccessIconContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.primary[100]};
  border-radius: ${({ theme }) => theme.borderRadius.circle};
`;

export const SuccessTextContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.tiny};
`
