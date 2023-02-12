import RootLayout from "../components/RootLayout";
import AdminDashboard from "../features/dashboard/admin/components/AdminDashboard";
import DashHome from "../features/dashboard/admin/components/pages/DashHome";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Signup from "../routes/Signup";

const { createBrowserRouter, createRoutesFromElements, Route } = require("react-router-dom");

export const router = createBrowserRouter(createRoutesFromElements(
   <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signup />} />
      <Route path='admin' element={<AdminDashboard />} >
         <Route path="dashboard" element={<DashHome />} />
      </Route>
   </Route>
))