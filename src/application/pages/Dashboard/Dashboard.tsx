'use client';

import { useAppProvider } from '@/application/contexts/AppContext';

const Dashboard = () => {
  const { setTitle } = useAppProvider();
  setTitle('Dashboard');

  return <div>Dashboard</div>;
};

export const DashboardPage = Dashboard;

export default DashboardPage;
