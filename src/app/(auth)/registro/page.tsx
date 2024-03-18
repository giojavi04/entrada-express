import { Metadata } from 'next';

import Register from '@/application/pages/Register';

export const metadata: Metadata = {
  title: 'Registro - Entrada Express',
  description: 'Aplicación para gestionar la entrega de entradas'
};

export default function Registro() {
  return <Register />;
}
