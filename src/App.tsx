import './App.css'
import bg from './assets/bg.mp4'
import Home from './components/Home';
import Work from './components/Work';
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
      element: <Home/>
    },
  {
    path: "/work",
    element: <Work/>
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
