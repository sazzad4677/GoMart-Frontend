import React, { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from "../../../images/Logo.png";
import background from "../../../images/Login/groceries.jpg";
import InputField from "../InputField/InputField";
import { useForm } from "react-hook-form";
const ForgotPassword = ({ submitHandler, loading }) => {
  const [showUserNameField, setShowUserNameField] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
                Forgot Password?
              </h2>
              <p className="text-skin-secondary mt-4 text-center text-sm">
                We get it, stuff happens. Just enter your email address or
                username below and we'll send you a link to reset your password!
              </p>
            </div>
            {/* Login Form */}
            <form
              className="mt-8 space-y-6"
              onSubmit={handleSubmit(submitHandler)}
              autoComplete="off"
            >
              <input type="hidden" name="remember" value="true" />
              <div className="relative z-0">
                {showUserNameField ? (
                  <InputField
                    identity="forgotPassword"
                    name={"username"}
                    type={"text"}
                    labelFor={"username"}
                    label={"Enter your username"}
                    errors={errors.forgotPassword?.message}
                    register={register}
                  />
                ) : (
                  <InputField
                    identity="forgotPassword"
                    name={"email"}
                    type={"email"}
                    labelFor={"email"}
                    label={"Enter your email"}
                    errors={errors.forgotPassword?.message}
                    register={register}
                  />
                )}
              </div>
              <div className="flex items-center justify-center">
                <div className="text-sm">
                  <p
                    onClick={() => setShowUserNameField((prev) => !prev)}
                    className="cursor-pointer text-sky-600 hover:opacity-90"
                  >
                    Or Enter the Username
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="red-button h-12 w-full"
                  disabled={loading ? true : false}
                >
                  {loading ? (
                    <>
                      <span
                        class="spinner h-4 w-4"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      <span class="pl-1">Loading...</span>
                    </>
                  ) : (
                    <>Reset Password &rarr;</>
                  )}
                </button>
              </div>
              <div className="flex items-center justify-center space-x-2 text-center">
                <span className="h-px w-16 bg-gray-200"></span>
                <span className="font-normal text-gray-300">or</span>
                <span className="h-px w-16 bg-gray-200"></span>
              </div>
              <p className="text-md text-skin-secondary text-center">
                <Link
                  to="/login"
                  className="text-skin-base cursor-pointer no-underline transition duration-300 ease-in hover:opacity-80"
                >
                  Sign in
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

export default ForgotPassword;
