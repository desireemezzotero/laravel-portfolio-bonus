import { Link } from "react-router-dom"

function HeaderNav() {
  return (
    <div>
      <nav className="bg-black border-gray-200 text-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="{{Vite::asset('resources/img/DM-logo.png')}}" className="h-8 rounded-full" alt="dm logo" />
          </Link>

          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

            <button type="button" className="flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
              <img className="w-8 h-8 rounded-full" src="{{Vite::asset('resources/img/dmImgg.jpg')}}" alt="user photo" />
            </button>


            <button data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <Link to="/}" className="block py-2 px-3 text-white rounded-sm md:bg-transparent" aria-current="page">Home</Link>
              </li>

              <li>
                <a href="/about" className="block py-2 px-3 text-white rounded-sm md:bg-transparent" aria-current="page">About me</a>
              </li>

              <li>
                <a href="/" className="block py-2 px-3 text-white rounded-sm md:bg-transparent" aria-current="page">Services</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>



    </div>
  )
}

export default HeaderNav