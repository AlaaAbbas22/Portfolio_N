import { useState } from 'react'
import './App.css'
import bg from './assets/bg.mp4'
import Nav from './components/nav'

function App() {
  const [isopen, setisopen] = useState(false)

  return (
    <>
      
      <video autoPlay muted loop id="bg" className='filter'>
        <source src={bg} type="video/mp4"/>
      </video>
      <Nav/>
      <h1 className='writer writer-text text-white my-60'>Welcome to <span className='text-blue-400'>Alaa</span></h1>
    </>
  )
}

export default App
