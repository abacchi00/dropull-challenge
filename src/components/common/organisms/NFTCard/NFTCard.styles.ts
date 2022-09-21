import styled from '@emotion/styled';

export const PricesBanner = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.dark[300]};
  padding: 0.5rem 0.75rem;
  border-radius: ${({ theme }) => theme.borderRadius.small};
`;
