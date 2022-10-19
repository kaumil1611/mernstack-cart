import React, { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { signInSchemas } from "../schemas";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContextAPI } from "../Nav/NavBar";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const headers = {
  "Content-Type": "application/json",
};

const Login = () => {
  const { state, dispatch } = useContext(UserContextAPI);

  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signInSchemas,
      onSubmit: (value) => {
        // console.log("values", value);
        const result = JSON.stringify({
          name: value.name,
          email: value.email,
          password: value.password,
        });
        // console.log(result);
        axios
          .post("/login", result, {
            headers: headers,
          })
          .then((res) => {
            // console.log("response", res);
            if (res.status === 201) {
              dispatch({ type: "USER", payload: true });
              navigate("/");
            } else {
              alert("invalid login");
            }
          })
          .catch((err) => {
            if (err.response.status === 401 || err.response.status === 404) {
              alert("invalid login");
            }
          });
      },
    });

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="name"
            autoComplete="off"
            name="name"
            id="name"
            placeholder="Enter your name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
            <p className="form-error" style={{ color: "red" }}>
              {errors.name}
            </p>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            autoComplete="off"
            name="email"
            id="email"
            placeholder="Enter your email address"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="form-error" style={{ color: "red" }}>
              {errors.email}
            </p>
          ) : null}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            autoComplete="off"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="form-error" style={{ color: "red" }}>
              {errors.password}
            </p>
          ) : null}
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
