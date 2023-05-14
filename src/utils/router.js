import RootLayout from "../components/RootLayout";
import AdminDashboard from "../features/dashboard/admin/components/AdminDashboard";
import AddProduct from "../features/dashboard/admin/components/pages/AddProduct";
import DashHome from "../features/dashboard/admin/components/pages/DashHome";
import Products from "../features/dashboard/admin/components/pages/Products";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Signup from "../routes/Signup";

const { createBrowserRouter, createRoutesFromElements, Route, Link } = require("react-router-dom");

export const router = createBrowserRouter(createRoutesFromElements(
   <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signup />} />
      <Route path='admin' element={<AdminDashboard />} >
         <Route index path="dashboard" element={<DashHome />} />
         <Route path="products" element={<Products />} />
         <Route path="add-new-product" element={<AddProduct />} />
      </Route>
      <Route path='test' element={<div><Link to='/'>test</Link> </div>} />
   </Route>
))