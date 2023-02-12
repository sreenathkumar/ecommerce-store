import React from 'react'
import { RouterProvider } from 'react-router-dom';
import { router } from './utils/router';


export default function App() {
   console.log(localStorage.getItem('auth'))
   return (<RouterProvider router={router} />)
}
