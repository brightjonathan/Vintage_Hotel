import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-green-800 py-6">
        <div className="container mx-auto flex justify-between">
        <Link to={'/'} className="text-3xl text-white font-bold tracking-tight">
          Vintage hotel
        </Link>

        <span className="flex space-x-2">

        <Link to={'/sign-in'} className="flex bg-white items-center rounded-lg text-green-600 px-3 font-bold hover:bg-gray-100">
          Sign In
        </Link>

        </span>
        </div>
      
    </div>
  )
}

export default Header;


