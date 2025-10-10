import { TitleSection } from '@/app/(shared)/_components'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils';
import { FolderPlus, HandCoins, MessageSquare, UserPlus } from 'lucide-react';
import React from 'react'
import { steps } from '../constants';

const HowItWorks = () => {
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
          return <Card key={icon + desc} className={cn(softBg[i], softBg[i].replace("bg", "border").split("-").slice(0, 2).join("-"))}>
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
