import { Metadata } from 'next';

import DashboardPage from '@/application/pages/Dashboard/Dashboard';

export const metadata: Metadata = {
  title: 'Dashboard - Entrada Express',
  description: 'Aplicación para gestionar la entrega de entradas'
};

const Dashboard = () => {
  return <DashboardPage />;
};

export default Dashboard;
