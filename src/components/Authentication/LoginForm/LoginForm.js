// form schema validation
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
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
import InputField from "../../../layout/Form/InputField";
// stylesheet
import "../styles.css";
import { toast } from "react-toastify";

const Login = ({ submitHandler, setRemember, loading }) => {
  // form validator
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginFormSchema) });

  const testAdminIdPass = () => {
    toast.info(
      <div>
        Email: test@mail.com <br /> Password: 1234567
      </div>,
      {
        position: "top-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
      }
    );
  };

  // Input Field data
  const inputData = [
    {
      id: "email",
      name: "email",
      type: "email",
      labelFor: "email",
      label: "Enter Your Email",
      errors: errors.email?.message,
      register: register,
    },
    {
      id: "password",
      name: "password",
      type: "password",
      labelFor: "password",
      label: "Enter Your Password",
      errors: errors.password?.message,
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
                Welcome Back :)
              </h2>
              <p className="text-skin-secondary mt-2 text-sm">
                Please sign in to your account
              </p>
            </div>
            <div className="flex flex-row items-center justify-center space-x-10">
              {/* Social Icon*/}
              <button>
                <AiFillFacebook className="h-10 w-10 text-blue-500  hover:text-blue-400 " />
              </button>
              <button>
                <FcGoogle className="h-9 w-9  hover:opacity-70" />
              </button>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="h-px w-16 bg-gray-200"></span>
              <span className="font-normal text-gray-300">
                or continue with
              </span>
              <span className="h-px w-16 bg-gray-200"></span>
            </div>
            {/* Login Form */}
            <form
              className="mt-8 space-y-6"
              onSubmit={handleSubmit(submitHandler)}
              autoComplete="off"
            >
              <input type="hidden" name="remember" value="true" />
              {/* Email Field */}
              {inputData.map(
                ({ id, name, type, label, labelFor, errors, register }) => (
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
                )
              )}
              {/* Other fields */}
              <div className="flex items-center justify-between">
                <div className="relative flex items-center">
                  <label
                    htmlFor="remember_me"
                    className=" text-skin-secondary absolute left-6 right-6 w-28 text-sm"
                  >
                    Remember me
                  </label>
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="checked:bg-skin-primary text-skin-base absolute h-4 w-4 rounded checked:border-transparent checked:ring-[#40aa54] focus:ring-[#40aa54]"
                    onClick={() => setRemember((prev) => !prev)}
                  />
                </div>
                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="text-red hover:opacity-90"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>
              <div className="flex justify-end ">
                <button
                  type="submit"
                  className="green-button h-12 w-full"
                  disabled={loading ? true : false}
                >
                  {loading ? (
                    <>
                      <span
                        className="spinner h-4 w-4"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span className="pl-1">Loading...</span>
                    </>
                  ) : (
                    <> Sign In &rarr;</>
                  )}
                </button>
              </div>
              <p className="text-md text-skin-secondary mt-10 flex flex-col items-center justify-center text-center">
                <span>Don't have an account?</span>
                <Link
                  to="/register"
                  className="text-skin-base cursor-pointer no-underline transition duration-300 ease-in hover:opacity-80"
                >
                  Sign up
                </Link>
              </p>
            </form>
            <Link
              to="/"
              className=" text-md text-skin-secondary mt-10 flex cursor-pointer items-center justify-center gap-2 text-center"
            >
              <BsArrowLeftShort className="h-6 w-6" />
              <span> Go Back to Home</span>
            </Link>
            <p
              onClick={testAdminIdPass}
              className="text-md cursor-pointer text-center text-green"
            >
              Login as Admin
            </p>
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

export default Login;
