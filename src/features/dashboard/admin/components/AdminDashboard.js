import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import "../asset/css/sidebar.css";
import DashboardNav from './ui/DashboardNav';
import FullSidebar from './ui/FullSidebar';
import MiniSidebar from './ui/MiniSidebar';


export default function AdminDashboard() {
   const [toggleSidebar, setToggleSidebar] = useState(true);
   //const [userName, setUserName] = useState('');
   //const [userEmail, setUserEmail] = useState('')

   const navigate = useNavigate()
   //const { data } = useLoggedInUserQuery();
   const user = useSelector((state) => state.auth.user);
   const { firstName, lastName, username } = user || {};
   var userName = ''
   if (firstName || lastName) {
      userName = firstName + ' ' + lastName;
   }
   // const fetchDashboard = async () => {
   //    try {
   //       const res = await fetch('/api/dashboard', {
   //          method: 'GET',
   //          headers: {
   //             Accept: 'application/json',
   //             'Content-Type': 'application/json',
   //          },
   //          credentials: 'include'
   //       });
   //       const data = await res.json();
   //       if (data.data) {
   //          const { fname, lname, username } = data.data;
   //          if (fname || lname) {
   //             setUserName(fname + ' ' + lname);
   //             setUserEmail(username);
   //          } else {
   //             setUserEmail(username);
   //             setUserName(username);
   //          }
   //       } else {
   //          navigate('/login');
   //       }
   //    } catch (error) {
   //       console.error(error);
   //    }
   // }
   // useEffect(() => {
   //    //fetchDashboard();
   //    console.log(data);
   // }, [data])


   const handleSidebar = () => {
      setToggleSidebar(!toggleSidebar);
   }

   return (
      <div className="relative flex flex-row h-screen">
         <div className={`relative z-20 my-tran sidebar w-${toggleSidebar ? "1/5" : "auto"} px-4 h-full bg-gray-800 text-gray-400 flex flex-col items-center`}>
            <div className='absolute top-10 -right-2 p-2 z-20 bg-gray-900 w-8 h-8 rounded-full flex cursor-pointer' onClick={handleSidebar}>
               <svg xmlns="http://www.w3.org/2000/svg" width="1rem" height="1rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M5.7 6.71a.996.996 0 0 0 0 1.41L9.58 12L5.7 15.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L7.12 6.71c-.39-.39-1.03-.39-1.42 0z" /><path fill="currentColor" d="M12.29 6.71a.996.996 0 0 0 0 1.41L16.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L13.7 6.7c-.38-.38-1.02-.38-1.41.01z" /></svg>
            </div>
            {toggleSidebar ? <FullSidebar userName={"userName"} userEmail={username} /> : <MiniSidebar />}
         </div>

         <div className='relative z-10 dark:bg-gray-900 grow h-full overflow-y-auto px-12 py-24'>
            <DashboardNav />
            <Outlet />
         </div>
      </div>

   )
}
