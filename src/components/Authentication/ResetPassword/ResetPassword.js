import React from "react";
// form schema validation
import { yupResolver } from "@hookform/resolvers/yup";
// Form Validator
import { useForm } from "react-hook-form";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import background from "../../../images/Login/groceries.jpg";
// images
import logo from "../../../images/Logo.png";
import { resetPasswordSchema } from "../../../Validation/UserFormValidation";
import InputField from "../InputField/InputField";
// stylesheet
import "../styles.css";

const ResetPassword = ({ submitHandler }) => {
  // form validator
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(resetPasswordSchema) });
  // Input Field data
  const inputData = [
    {
      id: 1,
      name: "newPassword",
      type: "password",
      labelFor: "newPassword",
      label: "Enter Your New Password",
      errors: errors.newPassword?.message,
      register: register,
    },
    {
      id: 2,
      name: "confirmPassword",
      type: "password",
      labelFor: "password",
      label: "Confirm Your Password",
      errors: errors.confirmPassword?.message,
      register: register,
    },
  ];

  return (
    <div className="relative flex min-h-screen ">
      <div className="bg-skin-scheme-color flex min-w-0 flex-auto flex-col items-center sm:flex-row sm:justify-center md:items-start md:justify-start">
        <div className="bg-skin-scheme-color w-full p-8 sm:w-auto sm:rounded-lg md:flex md:h-full md:items-center  md:justify-center md:rounded-none md:p-10 lg:p-14 xl:w-2/5">
          <div className="w-full max-w-md space-y-8">
            <div className=" flex flex-col items-center justify-center">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="Go Mart" className="w-10 object-contain" />
                <span className="font-display text-skin-primary ml-2 text-center text-4xl font-bold leading-snug tracking-tight">
                  Go<span className="text-skin-base"> Mart</span>
                </span>
              </Link>
              <h2 className="mt-6 text-3xl font-bold text-gray-900">
                Set New Password
              </h2>
              <p className="text-skin-secondary mt-2 text-sm">
                Please enter your new password
              </p>
            </div>
            {/* Login Form */}
            <form
              className="mt-8 space-y-6"
              onSubmit={handleSubmit(submitHandler)}
              autoComplete="off"
            >
              <input type="hidden" name="remember" value="true" />
              {/* Email Field */}
              {inputData.map(({ id, name, type, label, errors, register }) => (
                <div key={id} className="relative z-0">
                  <InputField
                    identity="login"
                    id={id}
                    name={name}
                    type={type}
                    labelFor={name}
                    label={label}
                    errors={errors}
                    register={register}
                  />
                </div>
              ))}
              <div className="flex justify-end ">
                <button type="submit" className="green-button h-12 w-full">
                  Reset &rarr;
                </button>
              </div>
            </form>
            <Link
              to="/"
              className=" text-md text-skin-secondary mt-10 flex cursor-pointer items-center justify-center gap-2 text-center"
            >
              <BsArrowLeftShort className="h-6 w-6" />
              <span> Go Back to Home</span>
            </Link>
          </div>
        </div>
        {/* image bubble */}
        <div
          className="relative hidden h-full flex-auto items-center justify-center overflow-hidden bg-cover bg-no-repeat p-10 text-white sm:w-1/2 md:flex xl:w-3/5"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="from-green-light to-green-primary bg-skin-secondary absolute inset-0  z-0 bg-gradient-to-b opacity-50"></div>
          <ul className="circles">
            {[...Array(10)].map((el, i) => (
              <li key={i}></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
