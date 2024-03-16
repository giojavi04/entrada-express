import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import MainLayout from "@/application/components/layouts/MainLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Entrada Express",
  description: "Aplicación para gestionar la entrega de entradas",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full bg-gray-100">
      <body className={`${inter.className} h-full`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}