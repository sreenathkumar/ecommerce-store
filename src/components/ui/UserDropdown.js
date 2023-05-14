import { Link } from "react-router-dom";
import { useLoginMutation } from "../../features/auth/authApi";

export default function UserDropdown() {
   const [logout] = useLoginMutation();
   const dropdownMenu = [
      { name: 'Dashboard', url: '/admin/dashboard' },
      { name: 'Settings', url: '', },
      { name: 'Earning', url: '', },
      { name: 'Logout', url: '', }
   ]
   // const dispatch = useDispatch();

   // useEffect(() => {
   //    if (isSuccess) {
   //       dispatch(userLoggedOut())
   //    }
   // }, [dispatch, isSuccess])

   return (
      // <!-- Dropdown menu -->
      <div id="dropdownHover" className="z-10 absolute right-0 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700">
         <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
            <li>
               <Link to="/admin/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
            </li>
            <li>
               <Link to="" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
            </li>
            <li>
               <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</Link>
            </li>
            <li>
               <span onClick={logout} className="block cursor-pointer px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</span>
            </li>
         </ul>
      </div>
   )
}
