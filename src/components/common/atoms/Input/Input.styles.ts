import styled from '@emotion/styled';

export const StyledInput = styled.input`
  height: 48px;
  padding: 12px 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.dark[200]};
  border: 1px solid ${({ theme }) => theme.colors.dark[300]};
  color: ${({ theme }) => theme.colors.dark[400]};
`;
