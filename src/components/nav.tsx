import {useState} from "react"
import icon from "../assets/favicon.ico"

const Nav = () => {
    const [mob, setmob] = useState(false)

    const mountedStyle = { animation: "inAnimation 450ms ease-in" };
  const unmountedStyle = {
    animation: "outAnimation 470ms ease-out",
    animationFillMode: "forwards"
  };
    return (
    <> <header className="sticky top-8 z-50">
        <nav className="max-w-full" >
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto '>
            <div className="w-[50%]"> <a href="/"> <img className='rounded-full relative w-[10%]' src={icon}></img></a></div>
            
            <button type="button" onClick={()=>{setmob(!mob)}} className="p-2  text-gray-500 rounded-lg focus:outline-none ring-2 ring-gray-400 " >
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button></div>
            {mob&&<div id="Bar" className="items-center justify-between" style={mob ? mountedStyle : unmountedStyle}>
      <ul id= "Bar" onFocus={()=>{setmob(true)}} className="flex flex-col font-medium border border-gray-100 rounded-lg  fixed right-10" style={{backgroundColor: "rgba(0,0,0,.3)"}}>
        <li onClick={()=>{setmob(!mob)}}>
          <a href="/" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 ">Home</a>
        </li>
        <li onClick={()=>{setmob(!mob)}}>
          <a  href="/work" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 ">Work</a>
        </li>
        <li onClick={()=>{setmob(!mob)}}>
          <a href="/contact" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 ">Contact</a>
        </li>
      </ul>
    </div>}
        </nav></header>
    </>
  )
}

export default Nav