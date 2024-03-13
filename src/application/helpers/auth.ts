import { app } from "@/application/config/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

const auth = getAuth(app);

export const registerUser = async (
  email: string,
  password: string
): Promise<void> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("Usuario registrado:", user);
  } catch (error: any) {
    console.error("Error al registrar usuario:", error.message);
    throw error;
  }
};

export const signInUser = async (
  email: string,
  password: string
): Promise<void> => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("Usuario autenticado:", user);
  } catch (error: any) {
    console.error("Error al iniciar sesión:", error.message);
    throw error;
  }
};

export const signOutUser = async (): Promise<void> => {
  try {
    await signOut(auth);
    console.log("Sesión cerrada");
  } catch (error: any) {
    console.error("Error al cerrar sesión:", error.message);
    throw error;
  }
};