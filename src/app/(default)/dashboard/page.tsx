import DashboardPage from "@/application/pages/Dashboard/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard - Entrada Express",
  description: "Aplicación para gestionar la entrega de entradas",
};

const Dashboard = () => {
  return <DashboardPage />
}

export default Dashboard;
