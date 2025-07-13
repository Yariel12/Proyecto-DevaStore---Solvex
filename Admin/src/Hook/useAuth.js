import { useState, useEffect } from "react";
import { getUser, getToken } from "../utils/authUtils";

export function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = getToken();
    if (token) {
      const storedUser = getUser();
      setUser(storedUser);
    }
  }, []);

  return { user };
}
