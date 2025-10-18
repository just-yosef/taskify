import mongoose, { Document } from "mongoose";
interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  role: "client" | "freelancer";
  profile: {
    title: string;
    bio: string;
    skills: string[];
    hourlyRate: number;
    location: string;
    avatar: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
    portfolio: string;
  };
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
}
export interface User {
  fullName: string;
  email: string;
  password: string;
  role: "client" | "freelancer";
  profile: {
    title: string;
    bio: string;
    skills: string[];
    hourlyRate: number;
    location: string;
    avatar: string;
  };
  socialLinks: {
    github: string;
    linkedin: string;
    portfolio: string;
  };
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
}
const userSchema = new mongoose.Schema<IUser>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minlength: 6 },
    role: {
      type: String,
      enum: ["client", "freelancer", "admin"],
      default: "freelancer",
    },
    profile: {
      type: {
        title: { type: String, default: "" },
        bio: { type: String, default: "" },
        skills: { type: [String], default: [] },
        hourlyRate: { type: Number, default: 0 },
        location: { type: String, default: "EGYPT" },
        avatar: { type: String, default: "" },
      },
      _id: false,
      default: {},
    },
    socialLinks: {
      github: { type: String, default: "" },
      linkedin: { type: String, default: "" },
      portfolio: { type: String, default: "" },
      _id: false,
    },
    isVerified: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    lastLogin: Date,
  },
  { timestamps: true }
);

// userSchema.pre<Query<IUser, IUser>>(/find/, function (next) {
//     this.select("-password")
//     next()
// })
export default mongoose.models.User ||
  mongoose.model<IUser>("User", userSchema);
