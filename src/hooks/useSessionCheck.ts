import { useEffect } from "react";
import { useAuthStore } from "@stores/useUserStore";
import { useNavigate } from "react-router-dom";

export default function useSessionCheck() {
  const auth = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      const expiration = localStorage.getItem("session_expiration");
      if (expiration && Date.now() > Number(expiration)) {
        auth.logout();
        navigate("/login");
      }
    }, 10000); 

    return () => clearInterval(interval);
  }, [auth, navigate]);
}
