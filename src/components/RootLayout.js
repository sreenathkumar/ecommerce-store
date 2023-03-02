import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'

export default function RootLayout() {
   const { pathname } = useLocation();
   return (
      <>
         {!pathname.includes('/admin/') && <Header></Header>}
         <main className='max-w-screen-2xl'>
            <Outlet />
         </main>
      </>
   )
}
