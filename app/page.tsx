import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
        <section className="flex flex-col justify-center items-center h-80">
          <h1 className='font-extrabold md:text-6xl bg-clip-text text-black text-center w-3/4 text-2xl'>
            Create Perfect Character with a Click!
          </h1>
          <span className='w-3/4 text-center'>
            Build by one developer for others. Using AI to generate characters you thought about.
            Recreating your fantasies has never been easier.
          </span>
          <div className='flex gap-3 mt-4'>
            <Link href='/generate' className='border-black border-[1px] p-2 px-4 text-2xl font-medium rounded-md'>
              Generate
            </Link>
            <Link href='/explore' className='bg-black p-2 text-2xl font-medium px-4 text-white rounded-md text-center'>
              Explore
            </Link>
          </div>
        </section>
        {/* <video autoPlay muted loop playsInline className='' >
            <source src="https://assets.trpc.io/www/v10/v10-dark-landscape.mp4" type="video/mp4" />
        </video> */}
    </>
  )
}
