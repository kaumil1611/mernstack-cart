import DefaultLayout from "../Layout/DefaultLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../Login/Login";
import Cart from "../Cart/Cart";
import Home from "../Home/Home";
function NavBar() {
  return (
    <BrowserRouter>
      <DefaultLayout />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default NavBar;
