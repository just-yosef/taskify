"use client"

import { TitleSection } from '@/app/(shared)/_components'
import { Checkbox } from '@/components/ui/checkbox'
import React, { useState } from 'react'

const JoinToUs = () => {
    const [selected, setSelected] = useState<'client' | 'freelancer' | null>(null)

    return (
        <section className="mt-10">
            <TitleSection text="Join thousands of freelancers and entrepreneurs" translationKey='JointhousandsOfFreelancersAndEntrepreneurs' />

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:w-[980px] mx-auto mt-6">
                <div 
                    className={`flex border-orange-300 border flex-1  gap-3 active:scale-[1.02] p-4 min-h-[150px] rounded-xl cursor-pointer transition 
            ${selected === 'client' ? 'bg-peach text-white' : 'bg-blue/20 text-blue hover:bg-blue/30'}`}
                    onClick={() => setSelected('client')}
                >
                    <div className='flex flex-col gap-2'>
                        <section className='flex items-center gap-2'>
                            <Checkbox checked={selected === 'client'} />
                            <span className="font-medium font-[rubicMedium]">Join As Client</span>
                        </section>
                        <p>Find top freelancers to bring your projects to life — quickly and efficiently</p>
                    </div>
                </div>
                <div
                    className={`flex border-sky-300 border flex-1 gap-3 active:scale-[1.02] p-4 min-h-[150px] rounded-xl cursor-pointer transition 
            ${selected === 'freelancer' ? 'bg-sky text-white' : 'bg-sky/20 text-sky hover:bg-sky/30'}`}
                    onClick={() => setSelected('freelancer')}
                >
                    <div className='flex flex-col gap-2'>
                        <section className='flex items-center gap-2'>
                            <Checkbox checked={selected === 'freelancer'} />
                            <span className="font-medium font-[rubicMedium]">Join As Freelancer</span>
                        </section>
                        <p>Showcase your skills and start earning from your passion</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JoinToUs
