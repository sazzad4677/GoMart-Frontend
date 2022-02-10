import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useEffect } from "react";
// form validation
import { useForm } from "react-hook-form";
// icons
import { UserIcon } from "@heroicons/react/solid";
import { AiFillFacebook } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "yup-phone";
// images
import logo from "../../../images/Logo.png";
import background from "../../../images/Registration/groceries.jpg";
// form schema validation
import { registerFormSchema } from "../../../Validation/UserFormValidation";
import InputField from "../InputField/InputField";
// stylesheet
import "../styles.css";

const Registration = ({ submitHandler, loading, userAvatarPreview, setUserAvatarPreview, setUserAvatar }) => {
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
      type: "number",
      labelFor: "phone",
      label: "Enter Your Phone Number",
      errors: errors.phone?.message,
      register: register,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      labelFor: "password",
      label: "Enter Your Password",
      errors: errors.password?.message,
      register: register,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      labelFor: "confirmPassword",
      label: "Confirm your password",
      errors: errors.confirmPassword && "Passwords not matched",
      register: register,
    },
  ];


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
            <form className="mt-8 space-y-6" onSubmit={handleSubmit(submitHandler)} autoComplete="off" encType="multipart/form-data">
              <input type="hidden" name="remember" value="true" />
              {inputData.map(
                ({ id, name, type, label, labelFor, errors, register }) => (
                  <div className="relative z-0" key={id}>
                    <InputField
                      identity="register"
                      id={id}
                      name={name}
                      type={type}
                      labelFor={labelFor}
                      label={label}
                      errors={errors}
                      register={register}
                    />
                  </div>
                )
              )}
              {/* User profile picture */}
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium text-skin-secondary">Upload a profile picture</p>
                <div>
                  <div className="flex gap-3 items-center ">
                    <div className="border rounded-full avatar  bg-white">
                      {
                        userAvatarPreview
                          ? <img src={userAvatarPreview} alt="preview" className="avatar"/>
                          : <UserIcon className="h-6 w-6 text-gray-500 " />
                      }
                    </div>
                    <input {...register("avatar",
                      {
                        onChange: (avatar) => {
                          if (avatar.target.files.length > 0) {
                            if (avatar.target.files[0].type !== 'image/jpg' && avatar.target.files[0].type !== 'image/jpeg' && avatar.target.files[0].type !== 'image/png') {
                              return toast.error("Only jpg, png and jpeg files are allowed")
                            }
                            if ((avatar.target.files[0].size / 1024 / 1024).toFixed(2) > 2) {
                              return toast.error("File size is more than 2 MB.")
                            }
                            const reader = new FileReader()
                            reader.onload = () => {
                              if (reader.readyState === 2) {
                                setUserAvatar(reader.result)
                                setUserAvatarPreview(reader.result)
                              }
                            }
                            reader.onerror = () => {
                              return toast.error("Failed to read file!" + reader.error)
                            }
                            reader.readAsDataURL(avatar.target.files[0])
                          }
                        }
                      })} className="block w-full cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 focus:outline-none focus:border-transparent text-sm rounded-lg" aria-describedby="user_avatar_help" id="user_avatar" type="file" data-max-size="2048" accept="image/jpg, image/jpeg, image/png" pattern="/.*\.(gif|jpe?g|bmp|png)$/igm"
                    />
                  </div>
                  <div className="text-xs text-gray-500">
                    <p>A profile picture is useful to confirm your are logged into your account</p>
                    <p><span className="text-red">*</span>File Size not more than 2MB</p>
                  </div>
                </div>
              </div>
              <div>
                <button type="submit" className="green-button w-full h-12" disabled={loading ? true : false}>
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
          className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden text-white bg-no-repeat bg-cover relative " style={{ backgroundImage: `url(${background})` }}>
          <div className="absolute bg-gradient-to-b from-green-light to-green-primary opacity-50  bg-skin-secondary inset-0 z-0"></div>
          <ul className="circles">
            {[...Array(10)].map((el, i) => (
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
