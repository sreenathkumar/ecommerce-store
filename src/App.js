import React from 'react'
import { RouterProvider } from 'react-router-dom';
import useAuthCheck from './hooks/authCheck';
import { router } from './utils/router';


export default function App() {
   const authChecked = useAuthCheck();
   return (authChecked ? <RouterProvider router={router} /> : <div>Loading</div>)
}
