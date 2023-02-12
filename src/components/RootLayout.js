import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function RootLayout() {
   const path = document.location.pathname;
   return (
      <>
         {path !== '/admin/dashboard' && <Header></Header>}
         <main className='max-w-screen-2xl'>
            <Outlet />
         </main>
      </>
   )
}
