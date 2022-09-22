import styled from '@emotion/styled';

export type ButtonTypes = 'primary' | 'secondary' | 'tertiary';

export const StyledButton = styled.button<{ btnType: ButtonTypes }>`
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: ${({ theme }) => theme.spacing.medium};
  font-size: 0.875rem;
  transition: all 0.05s;

  ${({ theme, btnType }) => {
    switch (btnType) {
      case 'primary': return `color: ${theme.colors.light[100]}; background-color: ${theme.colors.primary[100]};`;
      case 'secondary': return `color: ${theme.colors.dark[200]}; background-color: ${theme.colors.light[100]};`;
      case 'tertiary': return `color: ${theme.colors.light[100]}; background-color: ${theme.colors.dark[300]}; border: 1px solid ${theme.colors.dark[400]};`;
    }
  }}

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  &:active {
    transform: translateY(2px);
    opacity: 90%;
  }
`;
