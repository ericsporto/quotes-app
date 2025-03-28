import { toast } from "react-toastify";
import { create } from "zustand";

interface User {
  name: string;
  email: string;
  password: string;
}

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => {
  const savedUser = JSON.parse(localStorage.getItem("user") || "null");

  return {
    user: savedUser,

    setUser: (user) => {
      set({ user });
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("user");
      }
    },

    login: (email, password) => {
      const storedUser = JSON.parse(localStorage.getItem("user") || "null");

      if (!storedUser || storedUser.email !== email) {
        toast.warning("Usuário não encontrado.");
        return false;
      }

      const hashedPassword = btoa(password);
      if (storedUser.password !== hashedPassword) {
        toast.warning("Senha incorreta.");
        return false;
      }

      const expiration = Date.now() + 30 * 60 * 1000;
      localStorage.setItem("session_expiration", expiration.toString());

      set({ user: { name: storedUser.name, email: storedUser.email, password: storedUser.password } });
      return true;
    },

    logout: () => {
      localStorage.removeItem("session_expiration");
      set({ user: null });
    },
  };
});
