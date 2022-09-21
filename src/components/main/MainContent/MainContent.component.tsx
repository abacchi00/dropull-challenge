import { ContentContainer } from './MainContent.styles';

interface Props {
  children: React.ReactNode;
}

const MainContent = ({ children }: Props) => {
  return (
    <ContentContainer>
      {children}
    </ContentContainer>
  );
}

export default MainContent;
