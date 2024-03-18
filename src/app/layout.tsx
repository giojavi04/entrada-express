import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';

import AppProvider from '@/application/contexts/AppContext';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Entrada Express',
  description: 'Aplicación para gestionar la entrega de entradas'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <AppProvider>{children}</AppProvider>
        <Toaster position="top-right" richColors duration={10000} />
      </body>
    </html>
  );
}
