import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function RootLayout() {
   return (
      <>
         <Header></Header>
         <main className='container-2xl max-w-7xl mx-auto px-4'>
            <Outlet />
         </main>
      </>
   )
}
