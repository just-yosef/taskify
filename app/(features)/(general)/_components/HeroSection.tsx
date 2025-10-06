import React from 'react'
import workImg from "../_assets/imgs/work-stress-XRGKF28WN7-w600.jpg"
import Image from 'next/image'
import { BodyContainer, TitleSection } from '@/app/(shared)/_components'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const HeroSection = () => {
    return (
        <>
            <TitleSection text='About Taskify' />
            <section className='flex flex-col gap-3 max-sm:flex-col-reverse'>
                <section className='flex sm:gap-5 justify-between max-lg:flex-wrap-reverse'>
                    <section className='pt-10'>
                        <h3 className='sm:mb-7 mb-5 text-2xl leading-[1] font-[rubicBold] '>Discover the easiest way to find freelance work that suits your skills.</h3>
                        <p className='text-muted-foreground leading-[1.3]'>A platform that brings together freelancers and businesses in a safe and easy-to-use environment.</p>
                        <Button variant="borderTeal" className='font-[rubicRegular] mt-4 max-sm:hidden' asChild>
                            <Link href="/signup">
                                Signup for free
                            </Link>
                        </Button>
                    </section>
                    <Image
                    className='max-lg:w-full object-cover'
                        width={600}
                        height={300}
                        alt='work'
                        src={workImg}
                    />
                </section>
            </section>
            <Button variant="borderTeal" className='font-[rubicRegular] mt-5 sm:hidden' asChild>
                <Link href="/signup">
                    Signup for free
                </Link>
            </Button>
        </>
    )
}

export default HeroSection
