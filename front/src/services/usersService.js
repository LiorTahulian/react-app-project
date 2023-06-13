import httpService from "./HttpServices";
import jwtDecode from "jwt-decode";

const TOKEN_KEY = "token";

setTokenHeader();

export function setTokenHeader() {
  httpService.setCommonHeader("x-auth-token", getJWT());
}

export function createUser(user) {
  return httpService.post("/users", user);
}

export async function loginUser(credentials) {
  const response = await httpService.post("/auth", credentials);
  localStorage.setItem(TOKEN_KEY, response.data.token);
  setTokenHeader();
  return response;
}

export function getJWT() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getUser() {
  try {
    const token = getJWT();
    return jwtDecode(token);
  } catch {
    return null;
  }
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  setTokenHeader();
}

const userService = {
  createUser,
  loginUser,
  getJWT,
  getUser,
  logout,
};

export default userService;
