import { MainHeader } from '../MainHeader';

import { LayoutContainer } from './MainLayout.styles';

import { theme } from '@/styles';

interface Props {
  children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
  return (
    <LayoutContainer>
      <MainHeader />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: `0 ${theme.spacing.large} ${theme.spacing.large} ${theme.spacing.large}` }}> {/* TODO refactor and remove padding when mobile view */}
        {children}
      </div>
    </LayoutContainer>
  );
}

export default MainLayout;
