"use client"
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const ProfileNavbar = () => {
  const { data: session, update } = useSession();
  const [providers, setProviders] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    }
    setUpProviders();
  }, [])

  return (
      <>
      {
        session?.user
        ? 
        <>
          <div className='border-[1px] border-black px-2 rounded-md flex justify-center items-center gap-2'>
            <span>{session.user.credits}</span>
            <svg className='h-4 w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.56 122.88"><path d="M121.85,87.3A64.31,64.31,0,1,1,36.88.4c2.94-1.37,5.92.91,4.47,4.47a56.29,56.29,0,0,0,75.75,77.4l.49-.27a3.41,3.41,0,0,1,4.61,4.61l-.35.69ZM92.46,74.67H92A16.11,16.11,0,0,0,76.2,58.93v-.52a15.08,15.08,0,0,0,11-4.72,15.19,15.19,0,0,0,4.72-11h.51a15.12,15.12,0,0,0,4.72,11,15.12,15.12,0,0,0,11,4.72v.51A16.13,16.13,0,0,0,92.46,74.67Zm10.09-46.59h-.27a7.94,7.94,0,0,0-2.49-5.81A7.94,7.94,0,0,0,94,19.78v-.27A7.94,7.94,0,0,0,99.79,17a8,8,0,0,0,2.49-5.8h.27A8,8,0,0,0,105,17a8,8,0,0,0,5.81,2.49v.27A8,8,0,0,0,105,22.27a7.94,7.94,0,0,0-2.49,5.81Zm-41.5,8h-.41a12.06,12.06,0,0,0-3.78-8.82A12.06,12.06,0,0,0,48,23.5v-.41a12.07,12.07,0,0,0,8.82-3.78,12.09,12.09,0,0,0,3.78-8.82h.41a12.08,12.08,0,0,0,3.77,8.82,12.09,12.09,0,0,0,8.83,3.78v.41a12.09,12.09,0,0,0-8.83,3.78,12.08,12.08,0,0,0-3.77,8.82Z"/></svg>
          </div>
          <button type="button" onClick={() => {
            signOut()
          }} className="">Sign Out</button>
          <img src={session.user.image} className='h-10 w-10 profile_round' alt='profile picture'/>
        </> 
        :
        (<>
          {providers && Object.values(providers).map((provider) => (
          <button type="button" 
            key={provider.name} 
            onClick={() => signIn(provider.id)}
            className="">Login</button>
          ))
          }
          </>)
      }
    </>
  )
}

export default ProfileNavbar