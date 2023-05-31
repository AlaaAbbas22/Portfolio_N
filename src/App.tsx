import './App.css'
import bg from './assets/bg.mp4'
import Nav from './components/nav'

function App() {
  return (
    <>
      
      <video autoPlay muted loop id="bg" className='filter'>
        <source src={bg} type="video/mp4"/>
      </video>
      <Nav/>
      <main className="relative -top-20">
        <div className="min-h-screen flex">
          <h1 className='writer writer-text text-white self-center mx-auto'>Welcome to <span className='text-blue-400'>Alaa</span>
          </h1>
        </div>
      </main>
    </>
  )
}

export default App
