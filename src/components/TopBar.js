import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetLoggedInUserQuery } from "../features/auth/authApi";
import UserDropdown from "./ui/UserDropdown";

export default function TopBar() {
   const [dropdownActive, setDropdownActive] = useState(false)
   const { loggedIn, user } = useSelector((state) => state.auth); //getting login status from Redux store

   //dropdown showing/hiding
   const handleDropdown = () => {
      setDropdownActive(!dropdownActive);
   }

   // login and register button group
   const loginRegister = <><Link to="/login" className="text-sm font-medium text-white hover:text-gray-500">Sign in</Link>
      <span className="h-6 w-px bg-gray-700 mx-4" aria-hidden="true"></span>
      <Link to="/register" className="text-sm font-medium text-white hover:text-gray-500">Create account</Link></>

   // user dashboard link
   var userDashboard = null;
   if (user) {
      userDashboard = <div className="relative cursor-pointer" onClick={handleDropdown}><img className="w-7 h-7 p-1 rounded-full ring-2 ring-gray-300" src={user.img} alt="user-avatar" />
         {dropdownActive && <UserDropdown />}
      </div>
   }

   return (
      <div className="bg-gray-900">
         <div className="flex mx-auto max-w-7xl align-center justify-between px-4 sm:px-6 lg:px-4 ">
            <div id="currency-box">
               <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-white text-sm py-2.5 text-center inline-flex items-center " type="button">USD <svg className="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
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
