import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface StyledCardAttributes {
  maxWidth: string;
  maxHeight: string;
  clickable: boolean;
}

export const StyledCard = styled.div<StyledCardAttributes>`
  display: flex;
  flex-direction: column;

  border: 1px solid ${({ theme }) => theme.colors.dark[300]};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  background-color: ${({ theme }) => theme.colors.dark[200]};

  padding: ${({ theme }) => theme.spacing.medium};
  gap: ${({ theme }) => theme.spacing.medium};

  width: min-content;
  height: min-content;
  max-width: ${props => props.maxWidth};
  max-height: ${props => props.maxHeight};

  ${({ clickable, theme }) => clickable && css`
    :hover {
      transition: all 0.2s;
      box-shadow: 0 0 0.5rem ${theme.colors.light[100]};
      cursor: pointer;
    }
  `}
`
