import axios, { AxiosResponse } from "axios";
import {
  AuthResponse,
  IUser,
  SigninInput,
  SignupFormData,
  SignupInput,
} from "../../(general)/types";
import { api } from "../../(general)/constants";

export const login = async (
  credentials: SigninInput
): Promise<AuthResponse> => {
  const loginResonse = (await api.post(
    "/login",
    credentials
  )) as AxiosResponse<AuthResponse>;
  localStorage.setItem("user-role", loginResonse.data.user.role!);
  return loginResonse.data;
};

export const signup = async (
  credentials: SignupFormData
): Promise<SignupInput> => {
  const loginResonse = await api.post("/signup", credentials);
  return loginResonse.data;
};
