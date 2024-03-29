import { app } from "@/application/config/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";
import { doc, getFirestore, setDoc, getDoc } from "firebase/firestore";

const auth = getAuth(app);
const db = getFirestore(app);

export const registerUser = async (name: string, dni: string, email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    const roleId = "CSJqU02XDqPEN5IVJDtP";

    const userRef = doc(db, "users", user.uid);
    const roleRef = doc(db, "roles", roleId);

    await setDoc(userRef, {
      name,
      dni,
      email: user.email,
      role: roleRef,
    });
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

/** All auth user roles tools */
export const getUserRoles = async (userId: string) => {
  const userRef = doc(db, "roles", userId);
  const userSnapshot = await getDoc(userRef);
  if (userSnapshot.exists()) {
    return userSnapshot.data().roles;
  } else {
    return [];
  }
};


export const checkUserRole = async (userId: string, role: string) => {
  const userRoles = await getUserRoles(userId);
  return userRoles.includes(role);
};
