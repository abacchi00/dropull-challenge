import styled from '@emotion/styled';

interface StyledCardAttributes {
  maxWidth: string;
  maxHeight: string;
  type: 'primary' | 'secondary';
}

export const StyledCard = styled.div<StyledCardAttributes>`
  display: flex;
  flex-direction: column;

  border: ${({ theme, type }) => type === 'primary' ? `1px solid ${theme.colors.dark[300]}` : 'none'};
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  background-color: ${({ theme, type }) => theme.colors.dark[type === 'primary' ? 200 : 300]};

  padding: ${({ theme }) => theme.spacing.medium};
  gap: ${({ theme }) => theme.spacing.medium};

  width: min-content;
  height: min-content;
  max-width: ${props => props.maxWidth};
  max-height: ${props => props.maxHeight};
`
