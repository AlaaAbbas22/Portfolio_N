import {useRef} from 'react'
import stats from '../assets/El statistician (1).png'
import wellytics from "../assets/dashboard.png"
import portf from "../assets/portf.png"
import Relax from "../assets/Relax.png"
const Work = () => {
    const ref = useRef(null)
    const ref2 = useRef(null)
    const welly = useRef(null)
    const port = useRef(null)
    const rela = useRef(null)
  return (
    <main className="relative -top-20">
      <div className="min-h-screen flex">
      <h1 className='m-auto grid grid-cols-3 sm:text-xl text-sm'>
        <button className='m-1 px-0 sm:px-14' onClick={()=>{ref.current?.scrollIntoView({behavior: 'smooth'})}}>El Statistician</button>
        <button className='m-1 px-0 sm:px-14' onClick={()=>{welly.current?.scrollIntoView({behavior: 'smooth'})}}>Wellytics</button>
        <button className='m-1 px-0 sm:px-14' onClick={()=>{port.current?.scrollIntoView({behavior: 'smooth'})}}>Personal website</button>
        <p></p>
        <button className='m-1 px-0 sm:px-14' onClick={()=>{rela.current?.scrollIntoView({behavior: 'smooth'})}}>Relaxify</button>
        </h1>
      </div>
      <div ref={ref} className="min-h-screen sm:mx-60">
      <h2  className='bg-gradient-to-r from-slate-300 to-gray-100 sm:w-1/4 mx-auto p-5 rounded-xl text-3xl my-2'>El Statistician <span className='text-lg'>(May 2023)</span></h2>
        <div className='bg-gradient-to-r from-cyan-900 to-blue-800 p-3 sm:p-10 rounded-2xl'>
          
          <img src={stats} className=' rounded-[30px] shadow-2xl p-1 my-3'></img>
          <div className='text-white text-lg indent-8 tracking-wide leading-loose text-justify font-serif'>
          El Statistician is a project for calculating and comparing different descriptive and inferential statistics. What is interesting about it is that you can enter the samples yourself or import CSV datasets directly and filter them as needed. Also, it enables the user to save the results in a history for comparing different results or reviewing them later.
          <div>The link to the GitHub repository of the project is <a target='_blank' href='https://github.com/AlaaAbbas22/ElStatistician/' className='text-white underline hover:text-black'>here</a>. You can also find the link to the app in the Getting Started section in the Readme file. <br></br> *The app and the API were deployed using free services, so it might cause delays and crashes but would be sufficient for testing.</div>
          </div>
        </div>
      </div>
      
      <div ref={welly} className="min-h-screen sm:mx-60">
      <h2  className='bg-gradient-to-r from-slate-300 to-gray-100 sm:w-1/3 mx-auto p-5 rounded-xl text-3xl my-2'>Wellytics <span className='text-lg'><br/>(September 2022-April 2023)</span></h2>
        <div className='bg-gradient-to-r from-cyan-900 to-blue-800 p-3 sm:p-10 rounded-2xl'>
          
          <img src={wellytics} className=' rounded-[30px] shadow-2xl p-1 my-3'></img>
          <div className='text-white text-lg indent-8 tracking-wide leading-loose text-justify font-serif'>
            This was a Minerva University Cornerstone Civic Project for Brothers on The Rise. I worked in a team of 5 to create a platform to collect data and analyze the responses with descriptive statistics and natural language processing (keyword extraction and emotional analysis). The details could be found in the Readme file in the GitHub repository.
          <div>The link to the GitHub repository of the project is <a target='_blank' href='https://github.com/Wellytics/wellytics' className='text-white underline hover:text-black'>here</a>.</div>
          </div>
        </div>
      </div>
      <div ref={port} className="min-h-screen sm:mx-60">
      <h2  className='bg-gradient-to-r from-slate-300 to-gray-100 sm:w-1/3 mx-auto p-5 rounded-xl text-3xl my-2'>Personal Website <span className='text-lg'><br/>(May-June 2023)</span></h2>
        <div className='bg-gradient-to-r from-cyan-900 to-blue-800 p-3 sm:p-10 rounded-2xl'>
          
          <img src={portf} className=' rounded-[30px] shadow-2xl p-1 my-3'></img>
          <div className='text-white text-lg indent-8 tracking-wide leading-loose text-justify font-serif'>
            This is pretty self-explanatory. I created this website to show my previous work and practice some of the frontend skills I recently learned.
          <div>The link to the GitHub repository of the project is <a target='_blank' href='https://github.com/AlaaAbbas22/Portfolio_N' className='text-white underline hover:text-black'>here</a>.</div>
          </div>
        </div>
      </div>
      <div ref={rela} className="min-h-screen sm:mx-60">
      <h2  className='bg-gradient-to-r from-slate-300 to-gray-100 sm:w-1/3 mx-auto p-5 rounded-xl text-3xl my-2'>Relaxify <span className='text-lg'><br/>(April 2023)</span></h2>
        <div className='bg-gradient-to-r from-cyan-900 to-blue-800 p-3 sm:p-10 rounded-2xl'>
          
          <img src={Relax} className=' rounded-[30px] shadow-2xl p-1 my-3'></img>
          <div className='text-white text-lg indent-8 tracking-wide leading-loose text-justify font-serif'>
            This was a project done as a part of the two-day <span className='text-red-500 font-bold'>health{"{hacks}"} 2023</span>. We created a chatbot for stress management using OpenAI API. We added a specific structure for the questions before being passed to the API to customize the process. Also, we added a sentiment analysis using a Natural Language Processing model for the emotions for the emotions of the person talking to the chatbot to provide immediate insights on the state of that person. <br/>(More details will be added to the README file in the GitHub repository for more clarification)
          <div>The link to the GitHub repository of the project is <a target='_blank' href='https://github.com/AlaaAbbas22/Relaxify' className='text-white underline hover:text-black'>here</a>.</div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Work