import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import { ToastContainer } from 'react-toastify';

export default function RootLayout() {
   const { pathname } = useLocation();
   return (
      <>
         <ToastContainer />
         {(!pathname.includes('/admin')) && <Header></Header>}
         <main className='max-w-screen-2xl dark:bg-gray-700 relative'>
            <Outlet />
         </main>
      </>
   )
}
