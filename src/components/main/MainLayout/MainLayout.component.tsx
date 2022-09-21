import { MainHeader } from '../MainHeader';

import { LayoutContainer, LayoutContent } from './MainLayout.styles';

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <LayoutContainer>
      <MainHeader />

      <LayoutContent>
        {children}
      </LayoutContent>
    </LayoutContainer>
  );
}

export default MainLayout;
