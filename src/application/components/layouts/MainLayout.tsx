'use client';

import { useAppProvider } from '@/application/contexts/AppContext';

import Header from './Header';
import Navbar from './Navbar';

const MainLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const { title } = useAppProvider();

  return (
    <div className="min-h-full">
      <Navbar />
      {title && <Header title={title} />}
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
