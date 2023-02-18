import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Toast from "../components/ui/Toast";
import { useLoginMutation } from "../features/auth/authApi";

export default function Login() {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const [login, { data, error }] = useLoginMutation();

   const navigate = useNavigate();
   useEffect(() => {
      if (data) {
         console.log(data)
         Toast(data?.type, data?.message);
         setTimeout(() => {
            navigate('/')
         }, 3000)
      }
      if (error) {
         Toast(error.data?.type, error.data?.message);
      }
   }, [data, error, navigate])
   const handleLogin = async (e) => {
      e.preventDefault();
      console.log('login clicked');
      login({
         username: email,
         password
      });
   }
   return (
      <section className="bg-white">
         <ToastContainer />
         <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <h1 className="text-3xl text-center font-bold leading-tight tracking-tight text-gray-900 mb-10 md:text-3xl">
               Sign in to your account
            </h1>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
               <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                  <form className="space-y-4 md:space-y-6" method="POST" onSubmit={handleLogin}>
                     <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" autoComplete="off" required onChange={(e) => setEmail(e.target.value)} />
                     </div>
                     <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required onChange={(e) => setPassword(e.target.value)} />
                     </div>
                     <div className="flex items-center justify-between">
                        <div className="flex items-start">
                           <div className="flex items-center h-5">
                              <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" />
                           </div>
                           <div className="ml-3 text-sm">
                              <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                           </div>
                        </div>
                        <Link to="" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Forgot password?</Link>
                     </div>

                     <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 f font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700  disabled:opacity-50 cursor-pointer" disabled={(email.length === 0 || password.length === 0) && true} >
                        Sign in
                     </button>

                     <div className="flex items-center">
                        <div className="dark:bg-gray-700 grow h-0.5"></div>
                        <div className="w-auto text-gray-400 dark:text-gray-500 text-sm grow-0 mx-4">Or continue with</div>
                        <div className="dark:bg-gray-700 h-0.5 grow"></div>
                     </div>
                     <div className="flex items-center justify-between">
                        <button type="button" className="text-gray-900 border-gray-300 ring-1 font-medium rounded-lg text-sm px-12 py-2.5 text-center inline-flex items-center dark:text-white dark:border-blue-600">
                           <svg xmlns="http://www.w3.org/2000/svg" className="dark:text-blue-600 text-gray-700 w-4 h-4" preserveAspectRatio="xMidYMid meet" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504C110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6c98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                        </button>
                        <button type="button" className="text-gray-900 border-gray-300 ring-1 font-medium rounded-lg text-sm px-12 py-2.5 text-center inline-flex items-center dark:text-white dark:border-blue-600">
                           <svg xmlns="http://www.w3.org/2000/svg" className="dark:text-blue-600 text-gray-700 w-4 h-4" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" /></svg>
                        </button>
                        <button type="button" className="text-gray-900 border-gray-300 ring-1 font-medium rounded-lg text-sm px-12 py-2.5 text-center inline-flex items-center dark:text-white dark:border-blue-600">
                           <svg xmlns="http://www.w3.org/2000/svg" className="dark:text-blue-600 text-gray-700 w-4 h-4" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645c0 138.72-105.583 298.558-298.558 298.558c-59.452 0-114.68-17.219-161.137-47.106c8.447.974 16.568 1.299 25.34 1.299c49.055 0 94.213-16.568 130.274-44.832c-46.132-.975-84.792-31.188-98.112-72.772c6.498.974 12.995 1.624 19.818 1.624c9.421 0 18.843-1.3 27.614-3.573c-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319c-28.264-18.843-46.781-51.005-46.781-87.391c0-19.492 5.197-37.36 14.294-52.954c51.655 63.675 129.3 105.258 216.365 109.807c-1.624-7.797-2.599-15.918-2.599-24.04c0-57.828 46.782-104.934 104.934-104.934c30.213 0 57.502 12.67 76.67 33.137c23.715-4.548 46.456-13.32 66.599-25.34c-7.798 24.366-24.366 44.833-46.132 57.827c21.117-2.273 41.584-8.122 60.426-16.243c-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>
                        </button>
                     </div>
                     <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet? <Link to="/register" className="font-medium text-blue-600 hover:underline dark:text-blue-500">Sign up</Link>
                     </p>
                  </form>
               </div>
            </div>
         </div>
      </section>
   )
}
