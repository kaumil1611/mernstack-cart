import DefaultLayout from "../Layout/DefaultLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../Login/Login";
import Cart from "../Cart/Cart";
import Home from "../Home/Home";
import Logout from "../Logout/Logout";
import { createContext, useReducer } from "react";
import { initialState, reducer } from "../Reducer";
export const UserContextAPI = createContext();

const Routing = () => {
  return (
    <BrowserRouter>
      <DefaultLayout />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/logout" element={<Logout />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
function NavBar() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContextAPI.Provider value={{ state, dispatch }}>
        <Routing />
      </UserContextAPI.Provider>
    </>
  );
}

export default NavBar;
