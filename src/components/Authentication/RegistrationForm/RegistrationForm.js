import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
// form validation
import { useForm } from "react-hook-form";
// icons
import { AiFillFacebook } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import "yup-phone";
// images
import logo from "../../../images/Logo.png";
import background from "../../../images/Registration/groceries.jpg";
// form schema validation
import { registerFormSchema } from "../../../Validation/UserFormValidation";
import InputField from "../InputField/InputField";
// stylesheet
import "../styles.css";

const Registration = () => {
  // bubble logo for the right side image
  const rightImageBubble = 10;

  // toggle password view
  const [passwordView, setPasswordView] = useState(true);
  const [confirmPasswordView, setConfirmPasswordView] = useState(true);

  // form validator
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerFormSchema) });

  // Input Field Data
  const inputData = [
    {
      id: 1,
      name: "name",
      type: "text",
      labelFor: "name",
      label: "Enter Your Name",
      errors: errors.name?.message,
      register: register,
    },
    {
      id: 2,
      name: "username",
      type: "text",
      labelFor: "username",
      label: "Enter Your Username",
      errors: errors.username?.message,
      register: register,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      labelFor: "email",
      label: "Enter Your Email",
      errors: errors.email?.message,
      register: register,
    },
    {
      id: 4,
      name: "phone",
      type: "text",
      labelFor: "phone",
      label: "Enter Your Phone Number",
      errors: errors.phone?.message,
      register: register,
    },
    {
      id: 5,
      name: "password",
      type: !passwordView ? "text" : "password",
      labelFor: "password",
      label: "Enter Your Password",
      errors: errors.password?.message,
      register: register,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: !confirmPasswordView ? "text" : "password",
      labelFor: "confirmPassword",
      label: "Confirm your password",
      errors: errors.confirmPassword && "Passwords not matched",
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
              <h2 className="mt-6 text-3xl font-bold text-gray-900">Sign Up</h2>
              <p className="mt-2 text-sm text-skin-secondary">
                It's Completely free
              </p>
            </div>
            {/* Social Sign up*/}
            <div className="flex flex-row justify-center items-center space-x-10">
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
            {/* Form */}
            <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <input type="hidden" name="remember" value="true" />
              {inputData.map(
                ({ id, name, type, label, labelFor, errors, register }) => (
                  <div className="relative z-0" key={id}>
                    <InputField
                      id={id}
                      name={name}
                      type={type}
                      labelFor={name}
                      label={label}
                      errors={errors}
                      register={register}
                    />
                    {/* Toggle Password View icon */}
                    {name === "password" &&
                      (passwordView ? (
                        <EyeIcon
                          className="absolute left-96 top-3 w-5 h-5 cursor-pointer  text-gray-500"
                          onClick={() => setPasswordView((prev) => !prev)}
                        />
                      ) : (
                        <EyeOffIcon
                          className="absolute left-96 top-3 w-5 h-5 cursor-pointer  text-gray-500"
                          onClick={() => setPasswordView((prev) => !prev)}
                        />
                      ))}
                    {name === "confirmPassword" &&
                      (confirmPasswordView ? (
                        <EyeIcon
                          className="absolute left-96 top-3 w-5 h-5 cursor-pointer  text-gray-500"
                          onClick={() =>
                            setConfirmPasswordView((prev) => !prev)
                          }
                        />
                      ) : (
                        <EyeOffIcon
                          className="absolute left-96 top-3 w-5 h-5 cursor-pointer  text-gray-500"
                          onClick={() =>
                            setConfirmPasswordView((prev) => !prev)
                          }
                        />
                      ))}
                  </div>
                )
              )}
              <div>
                <button type="submit" className="green-button w-full h-12">
                  Sign up &rarr;
                </button>
              </div>
              <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-skin-secondary">
                <span>Already have an account?</span>
                <Link
                  to="/login"
                  className="text-skin-base hover:opacity-80 no-underline cursor-pointer transition ease-in duration-300"
                >
                  Sign In
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
              <li key={i}>
                {/* <img src={logo} alt="Go Mart" className="object-contain" /> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Registration;