import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'
import Dropdown from '../../../../../components/ui/Dropdown';
import MenuLink from './MenuLink';
import { useGetAdminDashboardMenuQuery } from '../../api/adminDashboardApi';

export default function FullSidebar({ toggelSidebar, closeSidebar }) {
   const { pathname } = useLocation();
   const [userName, setUserName] = useState('');
   const [userEmail, setUserEmail] = useState('');
   const [activeDropdown, setActiveDropdown] = useState(pathname.split('/')[2] || '');

   //const { data } = useLoggedInUserQuery();
   const user = useSelector((state) => state.auth.user);
   const { data: dashboardMenuItems } = useGetAdminDashboardMenuQuery();

   //left side dashboard menu items
   const dashboardMenu = dashboardMenuItems?.filter((item) => item.title === 'admin_dashboard')[0];

   //changing active dropdown
   const handleDropdown = (name) => {
      if (activeDropdown.toLowerCase() !== name.toLowerCase()) {
         setActiveDropdown(name.toLowerCase());
      }
   }

   useEffect(() => {
      const { firstName, lastName, username } = user || {};
      if (firstName || lastName) {
         var userName = firstName + ' ' + lastName;
         setUserName(userName)
      }
      if (username) {
         setUserEmail(username)
      }
   }, [user]);

   return (
      <aside id='cta-button-sidebar' onClick={toggelSidebar} className={`flex justify-between fixed top-0 left-0 z-40 ${window.innerWidth < 1000 ? "w-full" : "w-64 dark:bg-gray-800/75"} h-screen transition-transform ${closeSidebar && "-translate-x-full"} sm:translate-x-0 `} aria-label="Sidebar">
         <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 w-64 dark:bg-gray-800">
            <Link className="flex items-center w-full px-3 mt-3 text-slate-50" href="#">
               <svg className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
               </svg>
               <span className="ml-2 text-sm font-bold">The App</span>
            </Link>

            <div className="w-full px-2 overflow-y-auto">
               <div className="flex flex-col items-center w-full mt-3 border-t border-gray-700">

                  {dashboardMenu?.data.map((item, index) => {
                     if (item.dropdownMenu) {
                        return (<div key={index} className='w-full'>
                           <MenuLink action={handleDropdown} link={item} />
                           <Dropdown allItems={dashboardMenuItems} activeDropdown={activeDropdown} visible={activeDropdown === item.title.toLowerCase()} />
                        </div>)
                     } else {
                        return <MenuLink key={index} action={handleDropdown} link={item} />
                     }
                  })}

                  <MenuLink link={{
                     title: 'Messages',
                     icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>',
                     url: '/messages',
                     path: ['/admin/messages'],
                     onClickAction: '',
                  }}>
                     <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>
                  </MenuLink>
               </div>
            </div>

            <Link className="flex items-center justify-center w-full h-16 mt-auto bg-gray-800 hover:bg-gray-700 hover:text-slate-50" href="#">
               <svg className="w-6 h-6 text-slate-50 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
               </svg>
               <div className='flex flex-col'>
                  <span className='ml-2 text-sm text-slate-50 font-medium'>{userName}</span>
                  <span className="ml-2 text-sm text-slate-50 font-small">{userEmail}</span>
               </div>
            </Link>
         </div>
      </aside>
   )
}
