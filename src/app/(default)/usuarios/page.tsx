import { Metadata } from 'next';

import UsersPage from '@/application/pages/Users';

export const metadata: Metadata = {
  title: 'Usuarios - Entrada Express',
  description: 'Aplicación para gestionar la entrega de entradas'
};

const Usuarios = () => {
  return <UsersPage />;
};

export default Usuarios;
