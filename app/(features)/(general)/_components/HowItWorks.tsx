import { TitleSection } from '@/app/(shared)/_components'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils';
import { FolderPlus, HandCoins, MessageSquare, UserPlus } from 'lucide-react';
import React from 'react'

const HowItWorks = () => {
  const steps = [
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
  ];

  return (
    <section className='mt-10'>
      <TitleSection text='How It Works' />
      <section className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 max-sm:grid-cols-1'>
        {steps.map(({ title, icon, desc }, i) => {
          const softBg = [
            "bg-teal-soft",
            "bg-sky-soft",
            "bg-rose-soft",
            "bg-peach-soft",
          ]

          const Icon = icon
          return <Card className={cn(softBg[i])}>
            <CardHeader>
              <CardTitle>
                  <span className={[
                    "text-teal",
                    "text-sky",
                    "text-rose",
                    "text-peach",
                  ][i]}>
                    {icon}
                  </span>
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent className='text-muted-foreground -mt-5 text-sm'> {desc} </CardContent>
          </Card>
        })}
      </section>
    </section>
  )
}

export default HowItWorks
