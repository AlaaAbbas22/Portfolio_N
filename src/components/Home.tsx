import React from 'react'

const Home = () => {
  return (
    <main className="relative -top-20">
      <div className="min-h-screen flex">
        <h1 className='writer writer-text text-white self-center mx-auto'>Welcome to <span className='text-blue-400'>Alaa</span>
        </h1>
      </div>
      <div className="min-h-screen">
        <div className=' font-mono  text-xl mx-auto pt-40'>
         
        <p className='mx-auto text-justify py-8 ring-2 rounded-xl bg-slate-100 leading-loose tracking-widest px-10 md:w-2/3'>
        <center>Hello, there! </center>
        I am <span className='text-red-600'>Alaa</span>, but you can call me <span className='text-red-600'>LOL</span>. I am a Computer Science major at Minerva University, headquartered in San Francisco, CA. I don't know if
        I am considered a software engineer, but I hope so. My best friend is Stackoverflow. I like programming jokes. Some people think that all
        programming jokes are bad jokes. Not all of them, just <span className='text-yellow-500'>sum(<span className='text-blue-900'>them</span>)</span>.
        </p> 
        </div>
      </div>
    </main>
  )
}

export default Home