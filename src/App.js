import React from 'react'
import { RouterProvider } from 'react-router-dom';
import useAuthCheck from './hooks/authCheck';
import { router } from './utils/router';


export default function App() {
   useAuthCheck()
   return (<RouterProvider router={router} />)
}
