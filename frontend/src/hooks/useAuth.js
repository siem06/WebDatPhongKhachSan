import { createContext, useContext, useMemo } from "react";
import { useLocalStorage } from "./useLocalStorage ";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);

  const updateUser = async (data) => {
    console.log("data", data);
    setUser(data);
  };

  const removeData = () => {
    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      updateUser,
      removeData,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
