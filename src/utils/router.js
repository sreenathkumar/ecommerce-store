import RootLayout from "../components/RootLayout";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Signup from "../routes/Signup";

const { createBrowserRouter, createRoutesFromElements, Route } = require("react-router-dom");

export const router = createBrowserRouter(createRoutesFromElements(
   <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signup />} />
   </Route>
))