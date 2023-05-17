import { Link, useLocation } from 'react-router-dom'

export default function Dropdown({ allItems, activeDropdown, visible }) {
   const { pathname } = useLocation();
   const splitedPath = pathname.split('/');
   //getting the submenus of the active menu 
   const activeDropdownItems = allItems?.filter((item) => item.title === `admin_${activeDropdown}_submenu`)[0]?.data;

   return (
      <div className={`${!visible && 'hidden'} z-10 bg-white divide-y divide-gray-100 shadow w-full dark:bg-gray-700`}>
         <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
            {activeDropdownItems?.map((item, index) => {
               const splitedUrl = item.url.split('/');
               if (item.onClick && !item.url) {
                  return <li key={index} onClick={item.onClick}>
                     <span className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white `}>{item.name}</span>
                  </li>
               } else {
                  return <li key={index} >
                     <Link to={item.url} className={`block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ${(splitedUrl[splitedUrl.length - 1] + '/' + splitedUrl[splitedUrl.length - 2]) === (splitedPath[splitedPath.length - 1] + '/' + splitedPath[splitedPath.length - 2]) && 'bg-gray-600'} `}>{item.name}</Link>
                  </li>
               }
            })}
         </ul>
      </div>
   )
}
