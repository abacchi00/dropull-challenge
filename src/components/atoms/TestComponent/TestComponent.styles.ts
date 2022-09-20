import styled from '@emotion/styled';

export const TestContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.dark[400]};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.medium};
  margin: ${({ theme }) => theme.spacing.medium};
`;
