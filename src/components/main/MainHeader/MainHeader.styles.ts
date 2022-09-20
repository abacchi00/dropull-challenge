import styled from '@emotion/styled';

import { theme } from '@/styles';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 80px;

  border: 1px solid ${theme.colors.dark[200]};
  box-sizing: border-box;
`;
