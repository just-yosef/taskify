import { AxiosError, AxiosResponse } from "axios";
import {
  AuthResponse,
  IUser,
  SigninInput,
  SignupFormData,
  SignupInput,
} from "../../(general)/types";
import { api } from "../../(general)/constants";
import { User } from "../models";

export const login = async (
  credentials: SigninInput
): Promise<AuthResponse> => {
  const loginResonse = (await api.post(
    "/login",
    credentials
  )) as AxiosResponse<AuthResponse>;
  return loginResonse.data;
};

export const signup = async (
  credentials: SignupFormData
): Promise<SignupInput> => {
  const loginResonse = await api.post("/signup", credentials);
  return loginResonse.data;
};

export const getUserById = async (id: string): Promise<IUser> => {
  try {
    return (await api.get(`/users/${id}`)).data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
export async function getUsers(): Promise<Partial<IUser>[]> {
  try {
    const res = await fetch("http://localhost:3000/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "force-cache",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch users (${res.status})`);
    }

    const data: Promise<Partial<IUser>[]> = await res.json();
    return (await data).map(user => ({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
    }));;
  } catch (error: any) {
    console.error("Error fetching users:", error);
    throw new Error(error.message || "Failed to fetch users");
  }
}
