import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
// form schema validation
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
// Form Validator
import { useForm } from "react-hook-form";
// icons
import { AiFillFacebook } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import background from "../../../images/Login/groceries.jpg";
// images
import logo from "../../../images/Logo.png";
import { loginFormSchema } from "../../../Validation/UserFormValidation";
import InputField from "../InputField/InputField";
// stylesheet
import "../styles.css";

const Login = () => {
  // toggle password view
  const [showPassword, setShowPassword] = useState(true);

  // Background Image Bubble
  const rightImageBubble = 10;

  // form validator
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginFormSchema) });

  // Input Field data
  const inputData = [
    {
      id: 1,
      name: "email",
      type: "email",
      labelFor: "email",
      label: "Enter Your Email",
      errors: errors.email?.message,
      register: register,
    },
    {
      id: 2,
      name: "password",
      type: !showPassword ? "text" : "password",
      labelFor: "password",
      label: "Enter Your Password",
      errors: errors.password?.message,
      register: register,
    },
  ];

  //handel form submit
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="relative min-h-screen flex ">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-skin-scheme-color">
        <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-skin-scheme-color">
          <div className="max-w-md w-full space-y-8">
            <div className=" flex flex-col justify-center items-center">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="Go Mart" className="object-contain w-10" />
                <span className="font-display font-bold tracking-tight leading-snug text-skin-primary ml-2 text-center text-4xl">
                  Go<span className="text-skin-base"> Mart</span>
                </span>
              </Link>
              <h2 className="mt-6 text-3xl font-bold text-gray-900">
                Welcome Back :)
              </h2>
              <p className="mt-2 text-sm text-skin-secondary">
                Please sign in to your account
              </p>
            </div>
            <div className="flex flex-row justify-center items-center space-x-10">
              {/* Social Icon*/}
              <button>
                <AiFillFacebook className="w-10 h-10 text-blue-500  hover:text-blue-400 " />
              </button>
              <button>
                <FcGoogle className="w-9 h-9  hover:opacity-70" />
              </button>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="h-px w-16 bg-gray-200"></span>
              <span className="text-gray-300 font-normal">
                or continue with
              </span>
              <span className="h-px w-16 bg-gray-200"></span>
            </div>
            {/* Login Form */}
            <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <input type="hidden" name="remember" value="true" />
              {/* Email Field */}
              {inputData.map(
                ({ id, name, type, label, labelFor, errors, register }) => (
                  <div key={id} className="relative z-0">
                    <InputField
                      id={id}
                      name={name}
                      type={type}
                      labelFor={name}
                      label={label}
                      errors={errors}
                      register={register}
                    />
                    {/* {name === "password" &&
                      (showPassword ? (
                        <EyeIcon
                          className="absolute left-96 top-3 w-5 h-5 cursor-pointer  text-skin-secondary"
                          onClick={() => setShowPassword((prev) => !prev)}
                        />
                      ) : (
                        <EyeOffIcon
                          className="absolute left-96 top-3 w-5 h-5 cursor-pointer  text-skin-secondary"
                          onClick={() => setShowPassword((prev) => !prev)}
                        />
                      ))} */}
                  </div>
                )
              )}
              {/* Other fields */}
              <div className="flex items-center justify-between">
                <div className="flex items-center relative">
                  <label
                    htmlFor="remember_me"
                    className=" text-sm text-skin-secondary absolute left-6 right-6 w-28"
                  >
                    Remember me
                  </label>
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 rounded absolute checked:bg-skin-primary checked:border-transparent"
                  />
                </div>
                <div className="text-sm">
                  <a href="#" className="text-red hover:opacity-90">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div className="flex justify-end ">
                <button type="submit" className="green-button w-full h-12">
                  Sign In &rarr;
                </button>
              </div>
              <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-skin-secondary">
                <span>Don't have an account?</span>
                <Link
                  to="/register"
                  className="text-skin-base hover:opacity-80 no-underline cursor-pointer transition ease-in duration-300"
                >
                  Sign up
                </Link>
              </p>
            </form>
            <Link
              to="/"
              className=" flex items-center justify-center gap-2 mt-10 text-center text-md text-skin-secondary cursor-pointer"
            >
              <BsArrowLeftShort className="w-6 h-6" />
              <span> Go Back to Home</span>
            </Link>
          </div>
        </div>
        {/* image bubble */}
        <div
          className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover relative
        "
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="absolute bg-gradient-to-b from-green-light to-green-primary opacity-50  bg-skin-secondary inset-0 z-0"></div>
          <ul className="circles">
            {[...Array(rightImageBubble)].map((el, i) => (
              <li key={i}></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Login;
