import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function TopBar() {
   const loggedIn = useSelector((state) => state.auth.loggedIn); //getting login status from Redux store

   // login and register button group
   const loginRegister = <><Link to="/login" className="text-sm font-medium text-white hover:text-gray-500">Sign in</Link>
      <span className="h-6 w-px bg-gray-700 mx-4" aria-hidden="true"></span>
      <Link to="/register" className="text-sm font-medium text-white hover:text-gray-500">Create account</Link></>

   // user dashboard link
   const userDashboard = <Link className="w-7 h-7"><img className="rounded-full" src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1676727705~exp=1676728305~hmac=67a5f2b2315cdebcb0620bccd4691915605e376a5c705b79e1d96b5a4f88c1ef" alt="user-avatar" /></Link>

   return (
      <div className="bg-gray-900">
         <div className="flex mx-auto max-w-7xl align-center justify-between px-4 sm:px-6 lg:px-4 ">
            <div id="currency-box">
               <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-white text-sm py-2.5 text-center inline-flex items-center " type="button">USD <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

               {/* <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
                  <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                     <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                     </li>
                     <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                     </li>
                     <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                     </li>
                     <li>
                        <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                     </li>
                  </ul>
               </div> */}
            </div>
            <div id="offer-box">
               <p className="flex h-10 items-center justify-center px-4 text-sm font-medium text-white sm:px-6 lg:px-8">Get free delivery on orders over $100</p>
            </div>
            <div id="cta" className="flex items-center justify-center">
               {loggedIn ? userDashboard : loginRegister}
            </div>
         </div>
      </div>
   )
}
