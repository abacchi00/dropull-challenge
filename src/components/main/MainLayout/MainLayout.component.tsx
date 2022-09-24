import { PageLoader } from '@/components/common/molecules';
import { MainHeader } from '@/components/main';

import { LayoutContainer, LayoutContent } from './MainLayout.styles';

interface Props {
  logo: any;
  loadingPage: boolean;
  loadingMessage: string;
  noContent: boolean;
  noContentMessage: string;
  children: React.ReactNode;
}

const MainLayout = ({ children, loadingMessage, loadingPage, noContentMessage, noContent, logo }: Props) => {
  return (
    <LayoutContainer>
      <MainHeader logo={logo} />

      <LayoutContent>
        {!loadingPage && !noContent && children}

        {!loadingPage && noContent && <p>{noContentMessage}</p>}

        {loadingPage && <PageLoader loadingMessage={loadingMessage} />}
      </LayoutContent>
    </LayoutContainer>
  );
}

export default MainLayout;
