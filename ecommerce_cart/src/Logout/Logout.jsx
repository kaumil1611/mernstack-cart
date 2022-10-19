import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContextAPI } from "../Nav/NavBar";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const Logout = () => {
  const { state, dispatch } = useContext(UserContextAPI);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/logout", {
        headers: headers,
        withCredentials: true,
      })
      .then((res) => {
        dispatch({ type: "USER", payload: false });
        navigate("/login");
        if (!res.status === 200) {
          const error = new Error("Something went wrong");
          throw error;
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return <div>Logout</div>;
};

export default Logout;
