"use client"
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ProfileNavbar from './Profile'


const Navbar = () => {  
  // const generateImage = async () => {
  //   const response = await fetch('/api/credits', {
  //     method: 'PATCH',
  //     body: JSON.stringify({ credits: 2 }),
  //   })
  //   if (response.ok) {
  //     update();
  //     router.push('/')
  //   }
  // }

  return (
    <header className='h-16 sticky backdrop-blur z-1000 navbar_bg w-full top-0 shadow-sm flex justify-stretch items-center'>
      <div className='p-4 px-8 w-full'>
        <nav className='flex justify-between items-center'>
          <div className='flex justify-center gap-4 items-center'>
            <Image src="/next.svg" height={80} width={80} alt="logo"/>
            <Image src="/vercel.svg" height={80} width={80} alt="logo"/>
          </div>
          <div className='flex gap-4 justify-center items-center text-lg font-normal'>
            <Link href="/">Home</Link>
            <Link href='/explore'>Explore</Link>
            <Link href='/generate'>Generate</Link>
            <ProfileNavbar />
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar