import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/home" className='text-2xl font-semibold font-[rubicRegular]'>
      Taskif <span className='text-lg -ml-1 text-[#008080] '>y</span>
    </Link>
  )
}

export default Logo
