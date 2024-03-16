import { LoginPage } from "@/application/pages/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Entrada Express",
  description: "Aplicación para gestionar la entrega de entradas",
};

const Login = () => {
  return (
    <LoginPage />
  )
};

export default Login;
