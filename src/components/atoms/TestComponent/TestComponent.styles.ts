import styled from '@emotion/styled';

export const TestContainer = styled.div`
  background-color: ${props => props.theme.colors.dark[400]};
  border-radius: ${props => props.theme.borderRadius.medium};
  padding: 16px;
  margin: 16px;
`;
