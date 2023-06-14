import {useRef} from 'react'

const Work = () => {
    const ref = useRef(null)
  return (
    <main className="relative -top-20">
      <div className="min-h-screen flex">
      <h1 className='m-auto'><button onClick={()=>{ref.current?.scrollIntoView({behavior: 'smooth'})}}>Work</button></h1>
      </div>
      <div ref={ref} className="min-h-screen ring-2 mx-60">

      </div>

    </main>
  )
}

export default Work