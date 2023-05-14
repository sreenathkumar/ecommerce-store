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
      <>
         <DashboardNav toggelSidebar={toggelSidebar} />
         <FullSidebar toggelSidebar={toggelSidebar} closeSidebar={closeSidebar} />
         <div className="p-4 dashboard-body-height sm:ml-64">

            <Outlet />

         </div>
      </>
   )
}
