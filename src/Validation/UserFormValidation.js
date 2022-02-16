import * as yup from "yup";
import "yup-phone";

// Register Form Schema
export const registerFormSchema = yup.object().shape({
  name: yup.string().max(25, "Name can't be more than 25 characters"),
  username: yup
    .string()
    .required("Provide Your username")
    .min(3, "Username at least 3 characters")
    .max(20, "Username can't be exist more than 20 characters'"),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Please provide a valid email address"),
  password: yup
    .string()
    .required("Please Provide a valid password")
    .min(6, "Password at least 6 characters")
    .max(20, "Password at most 20 characters"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
  phone: yup
    .string()
    .required("Please Provide your phone number")
    .phone("BD", true, "Provide Bangladeshi Phone number (01XXXNNNNNN)"),
});

// Login Form Schema
export const loginFormSchema = yup.object().shape({
  email: yup.string().email().required("Please provide a valid email address"),
  password: yup
    .string()
    .required("Please Provide a valid password")
    .min(6, "Password at least 6 characters")
    .max(20, "Password at most 20 characters"),
});