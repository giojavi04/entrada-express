import { Metadata } from 'next';

import { LoginPage } from '@/application/pages/Login';

export const metadata: Metadata = {
  title: 'Login - Entrada Express',
  description: 'Aplicación para gestionar la entrega de entradas'
};

const Login = () => {
  return <LoginPage />;
};

export default Login;
