import * as Yup from "yup";

export const signInSchemas = Yup.object({
  name: Yup.string().min(2).max(10).required("Please Enter Your Name"),
  email: Yup.string().email().required("Please Enter Your Email"),
  password: Yup.string()
    .required("Please Enter Your Password")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(8, "Must be exactly 8 digits")
    .max(8, "Must be exactly 8 digits"),
});
