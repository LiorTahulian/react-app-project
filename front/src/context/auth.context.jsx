import { createContext, useContext, useState } from "react";
import userService from "../services/usersService";

const fn_error_context_must_be_used = () => {
  throw new Error("must use authContext for consumer to work properly");
};

export const authContext = createContext({
  logout: fn_error_context_must_be_used,
  login: fn_error_context_must_be_used,
  createUser: fn_error_context_must_be_used,
  user: null,
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(userService.getUser());

  const refreshUser = () => setUser(userService.getUser());

  const login = async (credentials) => {
    const response = await userService.loginUser(credentials);
    refreshUser();
    return response;
  };

  const logout = () => {
    userService.logout();
    refreshUser();
  };

  return (
    <authContext.Provider
      value={{ logout, login, user, createUser: userService.createUser }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(authContext);
};

export default AuthProvider;
