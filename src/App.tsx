import './App.css'
import bg from './assets/bg.mp4'
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Work from './components/Work';
import Nav from './components/nav'
import "animate.css/animate.min.css";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import ScrollToTop from './components/Scroll';


const router = createBrowserRouter([
  {
    
    element: (
      <>
        <ScrollToTop />
        <video autoPlay muted loop id="bg" className='filter'>
          <source src={bg} type="video/mp4"/>
        </video>
        <Nav/>
        <Outlet/>
        <Footer/>
      </>
    ),
    children:
    [{
      path: "/",
      element: <Home/>
    },
  {
    path: "/work",
    element: <Work/>
  },
{
  path: "/contact",
  element: <Contact/>
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
