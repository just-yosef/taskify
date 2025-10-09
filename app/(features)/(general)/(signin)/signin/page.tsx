"use client"
import { LoginForm } from '@/components/login-form'
import { SignupForm } from '@/components/signup-form'
import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"
const Page = () => {
    const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signup')
    const toggleAuthMode = () => {
        setAuthMode(prev => (prev === 'signup' ? 'signin' : 'signup'))
    }
    return (
        <div className="flex flex-col items-center mt-10 overflow-x-hidden">
            <div className="max-sm:w-full w-[450px] sm:mx-auto overflow-x-hidden">
                <AnimatePresence key={"a"} mode='popLayout'>
                    {
                        authMode === 'signup' ? <motion.section
                            initial={{ opacity: 0, x: [-50, -100] }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: [-50, -100] }}
                            transition={{ duration: 0.3 }}
                            key="signin"
                        >
                            <SignupForm switchMode={toggleAuthMode} />
                        </motion.section> : <motion.section
                            initial={{ opacity: 0, x: [50, 100] }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: [50, 100] }}
                            key="login"
                            transition={{ duration: 0.3 }}
                        >
                            <LoginForm switchMode={toggleAuthMode} />
                        </motion.section>
                    }
                </AnimatePresence>
            </div>
            <button
                onClick={toggleAuthMode}
                className="mt-4 text-blue-500 underline"
            >
            </button>
        </div>
    )
}

export default Page
