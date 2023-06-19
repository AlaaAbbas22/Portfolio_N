import twit from "../assets/twitter.png"
import insta from "../assets/instagram-circle-icon-png-4.webp"
import face from "../assets/Facebook_Logo_(2019).png"
import inn from "../assets/in.png"

const Contact = () => {
  return (
    <>
      <h2  className='bg-gradient-to-r from-slate-300 to-gray-100 sm:w-1/4 mx-auto p-5 rounded-xl text-3xl my-2'>Say hi!</h2>
    <div className="hover:skew-y-0 mx-auto my-7 sm:my-10 sm:w-1/2  transition ease-in-out font-serif flex justify-center text-white p-4 sm:p-10 bg-gradient-to-r from-cyan-900 to-blue-800 rounded-xl shadow-lg ">
        <div className="tracking-wide leading-loose">        
          <p className="text-center font-bold text-lg sm:text-2xl">Email</p><p className="text-center text-lg sm:text-2xl "><a href="mailto:alaa@uni.minerva.edu" className="text-white hover:underline hover:text-white">alaa@uni.minerva.edu</a></p><br/>
          <p className="text-center font-bold  text-lg sm:text-2xl">Phone Number</p><p><a className="text-center text-lg sm:text-2xl text-white hover:underline hover:text-white" href="tel:+16284885433">+1(628) 488-5433</a></p><br/>
          <div className="grid grid-cols-4 gap-x-5 sm:gap-x-10">

          <div>
             <p>
              <a href="https://www.linkedin.com/in/alaaabbas22/" target="_blank">
                <img src={inn} className="mx-auto w-1/3 hover:animate-bounce sm:scale-100 scale-150" width="30" height="30"/>
                <p className="text-center text-blue-500 sm:visible invisible">@alaaabbas22</p>
              </a>
            </p>
          </div>
          <div>
            <div className="justify-center">
             <a href="https://www.facebook.com/AlaaOraby22/" target="_blank">
              <p>
                <img src={face} className="mx-auto w-1/3 hover:animate-bounce sm:scale-100 scale-150" width="30" height="30"/>
              </p>
              <p className="text-center text-blue-500 sm:visible invisible">
                @AlaaOraby22
              </p>
             </a>
            </div>
         </div>
         <div>
          <div className="justify-center">
           <a href="https://www.instagram.com/alaaoraby222/" target="_blank">
            <p>
              <img src={insta} className="mx-auto w-1/3 hover:animate-bounce sm:scale-100 scale-150" width="30" height="30"/>
            </p>
            <p className="text-center text-blue-500 sm:visible invisible">
              @alaaoraby222
            </p>
           </a>
          </div>
          </div>
          <div>
            <div className="justify-center">
             <a href="https://twitter.com/AlaaOraby222" target="_blank">
              <p>
                <img src={twit} className="mx-auto w-1/3 hover:animate-bounce sm:scale-100 scale-150" width="30" height="30"/>
              </p>
              <p className="text-center text-blue-500 sm:visible invisible">
                @AlaaOraby222
              </p>
             </a>
            </div>
            </div>

          </div>
          <br/>
          <p>
          </p>
        </div>
      </div>
    </>
  )
}

export default Contact