import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { StringToJSX } from '../../../../../utils/stringToJsX';

export default function MenuLink({ link, children, action }) {
   const { pathname } = useLocation();
   return (
      <Link onClick={() => {
         return action(link.title.toLowerCase())
      }} className={`relative flex items-center w-full h-12 px-3 text-slate-50 mt-2 rounded ${link?.path.includes(pathname) && 'bg-gray-700 text-gray-200'} hover:bg-gray-700 hover:text-slate-50`} to={link.url}>
         <StringToJSX className={'w-6 h-6 stroke-current'} domString={link.icon} />
         <span className="ml-2 text-sm font-bold">{link.title}</span>
         {link.title === 'Messages' && <span className="absolute top-0 left-0 w-2 h-2 mt-2 ml-2 bg-indigo-500 rounded-full"></span>}
         {children}
      </Link>
   )
}
