import { Link } from "react-router-dom";

export default function Navbar() {
   return (
      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4">
         <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-between">

               <button type="button" className="rounded-md bg-white pr
               -2 text-gray-400 lg:hidden">
                  <span className="sr-only">Open menu</span>

                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
               </button>

               {/* Logo */}
               <div className="ml-2 flex lg:ml-0">
                  <Link to="#">
                     <span className="sr-only">Your Company</span>
                     <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                  </Link>
               </div>


               <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">

                  </div>
               </div>

               <div className="flex ml-auto items-center">
                  <Link to="/" className="flex lg:ml-8 md:ml-6 ml-4 sm:ml-4 items-center text-gray-700 hover:text-gray-800">
                     <span className="block text-sm font-medium">Search</span>
                  </Link>
                  <Link to="/" className="flex lg:ml-8 md:ml-6 ml-4 items-center text-gray-700 hover:text-gray-800">
                     <span className="block text-sm font-medium">Help</span>
                  </Link>

                  {/* Cart */}
                  <div className="ml-4 flow-root lg:ml-6">
                     <Link to="/cart" className="group -m-2 flex items-center p-2">

                        <svg className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                        <span className="sr-only">items in cart, view bag</span>
                     </Link>
                  </div>

               </div>
            </div>
         </div>
      </nav>
   )
}
