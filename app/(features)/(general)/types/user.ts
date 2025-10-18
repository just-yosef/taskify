export interface IUser {
  _id?: string;
  fullName: string;
  email: string;
  password: string;
  role?: userRoles;
  profile?: UserProfile;
  socialLinks?: SocialLinks;
  isVerified?: boolean;
  createdAt?: Date;
  lastLogin?: Date;
}
export type userRoles = "client" | "freelancer";
export interface SocialLinks {
  github?: string;
  linkedin?: string;
  portfolio?: string;
}
export interface UserProfile {
  title: string;
  bio: string;
  skills: string[];
  hourlyRate: number;
  location: string;
  avatar: string;
}

export interface SigninInput {
  email: string;
  password: string;
}
export interface SignupInput {
  message: string;
  userId: string;
}
export interface SignupFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface AuthResponse {
  message: string;
  token: string;
  user: IUser;
}
