import './App.css'
import bg from './assets/bg.mp4'
import Nav from './components/nav'
import "animate.css/animate.min.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";


const router = createBrowserRouter([
  {
    
    element: (
      <>
        <video autoPlay muted loop id="bg" className='filter'>
          <source src={bg} type="video/mp4"/>
        </video>
        <Nav/>
        <Outlet/>
      </>
    ),
    children:
    [{
      path: "/",
      element: <main className="relative -top-20">
      <div className="min-h-screen flex">
        <h1 className='writer writer-text text-white self-center mx-auto'>Welcome to <span className='text-blue-400'>Alaa</span>
        </h1>
      </div>
      <div className="min-h-screen ">
        <div className='ring-2 rounded-xl bg-slate-300 font-mono tracking-widest text-xl leading-loose'>
         
        <p className='mx-80 text-justify py-4 mt-40'>
        <center>Hello, there! </center>
        I am Alaa, but you can call me LOL. I am a Computer Science major at Minerva University, headquartered in San Francisco, CA. I don't know if
        I am considered a software engineer, but I hope so. My best friend is Stackoverflow.
        </p> 
        </div>
      </div>
    </main>
    }]
  },
]);



function App() {
  return (
    <>
     <RouterProvider router={router} />  
    </>
  )
}

export default App
