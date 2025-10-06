import { Briefcase, FolderPlus, Globe, HandCoins, MessageSquare, ShieldCheck, UserPlus, Zap } from "lucide-react";

export const features = [
  { icon: ShieldCheck, title: "Secure & Fast Payments" },
  { icon: Zap, title: "Smart Matching Algorithm" },
  { icon: Briefcase, title: "Verified Freelancers" },
  { icon: Globe, title: "Global Opportunities" },
];

export const steps = [
  {
    title: "Create Your Account",
    desc: "Sign up and join our growing freelance community.",
    icon: <UserPlus className='mb-4 block' />
  },
  {
    title: "Add Your Skills or Project",
    desc: "Show your expertise or post a project that needs talent.",
    icon: <FolderPlus className='mb-4 block text-peach' />
  },
  {
    title: "Connect with Clients or Freelancers",
    desc: "Chat, collaborate, and find the right match for your goals.",
    icon: <MessageSquare className='mb-4 block' />
  },
  {
    title: "Start Working & Get Paid",
    desc: "Deliver great work and receive your earnings securely.",
    icon: <HandCoins className='mb-4 block' />
  },
]