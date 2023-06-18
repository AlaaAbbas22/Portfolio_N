import {useRef} from 'react'
import stats from '../assets/El statistician (1).png'

const Work = () => {
    const ref = useRef(null)
    const ref2 = useRef(null)
  return (
    <main className="relative -top-20">
      <div className="min-h-screen flex">
      <h1 className='m-auto grid grid-cols-3 text-xl'>
        <button className='m-1' onClick={()=>{ref.current?.scrollIntoView({behavior: 'smooth'})}}>El Statistician</button>
        <button className='m-1' onClick={()=>{ref2.current?.scrollIntoView({behavior: 'smooth'})}}>Wellytics</button>
        <button className='m-1' onClick={()=>{ref2.current?.scrollIntoView({behavior: 'smooth'})}}>Personal website</button>
        <button className='m-1' onClick={()=>{ref2.current?.scrollIntoView({behavior: 'smooth'})}}>Relaxify</button>
        <button className='m-1' onClick={()=>{ref2.current?.scrollIntoView({behavior: 'smooth'})}}>Super electrical distribution</button>
        </h1>
      </div>
      <div ref={ref} className="min-h-screen mx-60">
      <h2  className='bg-gradient-to-r from-slate-300 to-gray-100 w-1/4 mx-auto p-5 rounded-xl text-3xl my-2'>El Statistician <span className='text-lg'>(May 2023)</span></h2>
        <div className='bg-gradient-to-r from-cyan-900 to-blue-800 p-10 rounded-2xl'>
          
          <img src={stats} className=' rounded-[70px] shadow-2xl p-1 my-3'></img>
          <div className='text-white text-lg indent-8 tracking-wide leading-loose text-justify font-serif'>
          El Statistician is a project for calculating and comparing different descriptive and inferential statistics. What is interesting about it is that you can enter the samples yourself or import CSV datasets directly and filter them as needed. Also, it enables the user to save the results in a history for comparing different results or reviewing them later.
          <div>The link to the GitHub repository of the project is <a target='_blank' href='https://github.com/AlaaAbbas22/ElStatistician/' className='text-white underline hover:text-black'>here</a>. You can also find the link to the app in the Getting Started section in the Readme file. <br></br> *The app and the API were deployed using free services, so it might cause delays and crashes but would be sufficient for testing.</div>
          </div>
        </div>
      </div>
      <div ref={ref2} className="min-h-screen mx-60">
      <h2 className='bg-gradient-to-r from-slate-300 to-gray-100 w-1/4 mx-auto p-5 rounded-xl text-3xl my-2'>Coming Soon <span className='text-lg'>(June 2023)</span></h2>
        <div className='bg-gradient-to-r from-cyan-900 to-blue-800 p-10 rounded-2xl'>
          
          <div className='text-white text-lg indent-8 tracking-wide leading-loose text-justify font-serif'>
          I am still adding them, but I had to pull the previous portfolio because it was significantly harmful to people's eyes.
          </div>
        </div>
      </div>

    </main>
  )
}

export default Work