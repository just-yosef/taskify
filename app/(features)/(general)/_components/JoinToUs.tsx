"use client"

import { TitleSection } from '@/app/(shared)/_components'
import { Checkbox } from '@/components/ui/checkbox'
import React, { useState } from 'react'

const JoinToUs = () => {
    const [selected, setSelected] = useState<'client' | 'freelancer' | null>(null)

    return (
        <section className="mt-10">
            <TitleSection text="Join thousands of freelancers and entrepreneurs" />

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:w-[980px] mx-auto mt-6 font-[rubicMedium]  ">
                <div
                    className={`flex flex-1 items-center gap-3 active:scale-[1.05] px-4 py-5 rounded-xl cursor-pointer transition 
            ${selected === 'client' ? 'bg-peach text-white' : 'bg-blue/20 text-blue hover:bg-blue/30'}`}
                    onClick={() => setSelected('client')}
                >
                    <Checkbox checked={selected === 'client'} />
                    <span className="font-medium">Join As Client</span>
                </div>
                <div
                    className={`flex flex-1 items-center gap-3 active:scale-[1.05] px-4 py-5 rounded-xl cursor-pointer transition 
            ${selected === 'freelancer' ? 'bg-sky text-white' : 'bg-sky/20 text-sky hover:bg-sky/30'}`}
                    onClick={() => setSelected('freelancer')}
                >
                    <Checkbox checked={selected === 'freelancer'} />
                    <span className="font-medium">Join As Freelancer</span>
                </div>
            </div>
        </section>
    )
}

export default JoinToUs
