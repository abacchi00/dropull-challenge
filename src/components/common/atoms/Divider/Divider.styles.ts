import styled from '@emotion/styled';

export const StyledHr = styled.hr`
  width: 100%;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.dark[300]};
`;
