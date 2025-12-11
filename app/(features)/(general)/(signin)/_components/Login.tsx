"use client";
import React, { useState } from "react";
import { LoginForm } from "@/components/login-form";
import { SignupForm } from "@/components/signup-form";
import { AnimatePresence, motion } from "framer-motion";
import TabTransition from "./TabTransition";
type AuthActions = "signin" | "signup";
const Login = () => {
  const [authMode, setAuthMode] = useState<AuthActions>("signup");
  const toggleAuthMode = () =>
    setAuthMode((prev) => (prev === "signup" ? "signin" : "signup"));
  return (
    <div className="max-sm:w-full w-[450px] sm:mx-auto overflow-x-hidden">
      <AnimatePresence mode="popLayout">
        <>
          {authMode === "signup" ? (
            <TabTransition key="signin">
              <SignupForm switchMode={toggleAuthMode} />
            </TabTransition>
          ) : (
            <TabTransition key="login">
              <LoginForm switchMode={toggleAuthMode} />
            </TabTransition>
          )}
        </>
      </AnimatePresence>
    </div>
  );
};

export default Login;
