import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 5rem;

  border: 1px solid ${({ theme }) => theme.colors.dark[200]};
  box-sizing: border-box;
`;
