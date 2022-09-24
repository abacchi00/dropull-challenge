import styled from '@emotion/styled';

import { Card } from '@/components/common/atoms';

export const NFTDescriptionCardContainer = styled(Card)`
  max-width: 30rem;
  height: fit-content;
  padding: ${({ theme }) => theme.spacing.huge};

  @media (max-width: 720px) {
    padding: ${({ theme }) => theme.spacing.large};
  }

  @media (max-width: 540px) {
    padding: ${({ theme }) => theme.spacing.medium};
  }
`;
