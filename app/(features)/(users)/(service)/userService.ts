import axios from "axios";
import { AuthResponse, IUser, SigninInput, SignupFormData, SignupInput } from "../types";


export const login = async (credentials: SigninInput): Promise<AuthResponse> => {
    const loginResonse = await axios.post("/login", credentials);
    return loginResonse.data
}

export const signup = async (credentials: SignupFormData): Promise<SignupInput> => {
    const loginResonse = await axios.post("/signup", credentials);
    return loginResonse.data
}
