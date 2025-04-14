import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  email: string;
  password: string;
  role: "admin" | "user";
}

interface AuthContext {
  currentUser: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

interface AuthProvider {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContext);

export function useAuth() {
  return useContext(AuthContext);
}

const initialAdmin: User = {
  email: "amanelaa@yahoo.com",
  password: "yogiB3@r",
  role: "admin",
};

export function AuthProvider({ children }: AuthProvider) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    if (email === initialAdmin.email && password === initialAdmin.password) {
      setCurrentUser(initialAdmin);
      return true;
    }
    return false;
  };

  const logout = () => setCurrentUser(null);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
