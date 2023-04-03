import { useState } from 'react';
import "../asset/css/sidebar.css";
import FullSidebar from './ui/FullSidebar';
import { Outlet } from 'react-router-dom';
import DashboardNav from './ui/DashboardNav';


export default function AdminDashboard() {
   const [closeSidebar, setCloseSidebar] = useState(true);
   const toggelSidebar = () => {
      setCloseSidebar(!closeSidebar);
   }

   return (
      <div className='dark:bg-gray-700 relative'>
         <DashboardNav toggelSidebar={toggelSidebar} />
         <FullSidebar toggelSidebar={toggelSidebar} closeSidebar={closeSidebar} />
         <div className="p-4 h-full sm:ml-64">
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
               <Outlet />
            </div>
         </div>
      </div>
   )
}
