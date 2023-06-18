import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-950 to-slate-700 rounded-lg shadow m-4">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-200 sm:text-center ">© 2023 <Link to="/" className="hover:underline text-white hover:text-white">Alaa Abbas™</Link>. All Rights Reserved To My Family Who Gave Me My Name.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
        <li>
            <Link to="/" className="mr-4 hover:underline text-white hover:text-white md:mr-6 ">Home</Link>
        </li>
        <li>
            <Link to="/work" className="mr-4 hover:underline text-white hover:text-white md:mr-6">Work</Link>
        </li>
        <li>
            <Link to="/contact" className="mr-4 hover:underline text-white hover:text-white md:mr-6">Contact</Link>
        </li>
    </ul>
    </div>
</footer>

  )
}

export default Footer