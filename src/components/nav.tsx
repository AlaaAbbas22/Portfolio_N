import {useState} from "react"
import icon from "../assets/favicon.ico"
import {Link} from "react-router-dom"

const Nav = () => {
    const [mob, setmob] = useState(false)
    const [isMounted, setIsMounted] = useState(false);

    const mountedStyle = { animation: "inAnimation 450ms ease-in", background: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4))"};
  const unmountedStyle = {
    animation: "outAnimation 470ms ease-out",
    animationFillMode: "forwards",
    background: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))",
  };
    return (
    <> <header className="sticky top-8 z-50">
        <nav className="max-w-full" >
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto'>
            <div className="w-[50%]">  <img className='rounded-full relative w-[10%] ring-1 ring-slate-900 shadow-2xl invisible  ' src={icon}></img></div>
            
            <button type="button" onClick={() => {setIsMounted(!isMounted); if (!mob) setmob(true);}} className="p-2 shadow-2xl text-gray-500 rounded-lg focus:outline-none ring-2 ring-gray-400 " >
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button></div>
            {mob&&<div id="Bar" className="items-center justify-between" >
      <ul id= "Bar" style={isMounted ? mountedStyle : unmountedStyle} onAnimationEnd={() => { if (!isMounted) setmob(false) }} className="flex flex-col font-medium border border-gray-100 rounded-lg  fixed right-10" >
        <li onClick={()=>{setIsMounted(!isMounted)}}>
          <Link to="/" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 text-blue-200 hover:text-cyan-950">Home</Link>
        </li>
        <li onClick={()=>{setIsMounted(!isMounted)}}>
          <Link to="/work" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 text-blue-200 hover:text-cyan-950">Work</Link>
        </li>
        <li onClick={()=>{setIsMounted(!isMounted)}}>
          <Link to="/contact" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 text-blue-200 hover:text-cyan-950">Contact</Link>
        </li>
      </ul>
    </div>}
        </nav></header>
    </>
  )
}

export default Nav