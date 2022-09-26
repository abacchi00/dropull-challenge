import styled from '@emotion/styled';

export type ButtonTypes = 'primary' | 'secondary' | 'tertiary';

export const StyledButton = styled.button<{ btnType: ButtonTypes, loading: number }>`
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme, loading }) => loading ? '13px' : theme.spacing.medium}; // TODO refactor
  font-size: 0.875rem;

  // TODO REFACTOR
  ${({ theme, btnType }) => {
    switch (btnType) {
      case 'primary': return `color: ${theme.colors.light[100]}; background-color: ${theme.colors.primary[100]};`;
      case 'secondary': return `color: ${theme.colors.dark[200]}; background-color: ${theme.colors.light[100]};`;
      case 'tertiary': return `color: ${theme.colors.light[100]}; background-color: ${theme.colors.dark[200]}; border: 1px solid ${theme.colors.dark[300]};`;
    }
  }}

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  &:active {
    opacity: 80%;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;
