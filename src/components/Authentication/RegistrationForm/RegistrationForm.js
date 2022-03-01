import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
// form validation
import { useForm } from "react-hook-form";
// icons
import { UserIcon } from "@heroicons/react/solid";
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
import PhoneInputField from "../../../layout/Form/PhoneInputField";
// stylesheet
import "../styles.css";
import LocationAutoComplete from "../../../layout/Form/LocationAutoComplete";
import InputField from "../../../layout/Form/InputField";

const Registration = ({
  submitHandler,
  loading,
  userAvatarPreview,
  profileImageHandler,
  file,
  setFile,
  setPlace,
}) => {
  // form validator
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerFormSchema) });

  // Input Field Data
  const inputData = [
    {
      id: "name",
      name: "name",
      type: "text",
      labelFor: "name",
      label: "Enter Your Name",
      errors: errors.name?.message,
      register: register,
      autoComplete: true,
    },
    {
      id: "username",
      name: "username",
      type: "text",
      labelFor: "username",
      label: "Enter Your Username",
      errors: errors.username?.message,
      register: register,
      autoComplete: true,
    },
    {
      id: "email",
      name: "email",
      type: "email",
      labelFor: "email",
      label: "Enter Your Email",
      errors: errors.email?.message,
      register: register,
      autoComplete: true,
    },
    {
      id: "phone",
      name: "phone",
      type: "number",
      labelFor: "phone",
      label: "Enter Your Phone Number",
      errors: errors.phone?.message,
      register: register,
      autoComplete: true,
    },
    {
      id: "area",
      name: "area",
      type: "text",
      labelFor: "area",
      label: "Enter Your Area Name",
      errors: errors.area?.message,
      register: register,
      autoComplete: true,
    },
    {
      id: "password",
      name: "password",
      type: "password",
      labelFor: "password",
      label: "Enter Your Password",
      errors: errors.password?.message,
      register: register,
      autoComplete: true,
    },
    {
      id: "confirmPassword",
      name: "confirmPassword",
      type: "password",
      labelFor: "confirmPassword",
      label: "Confirm your password",
      errors: errors.confirmPassword && "Passwords not matched",
      register: register,
      autoComplete: true,
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
              <h2 className="mt-6 text-3xl font-bold text-gray-900">Sign Up</h2>
              <p className="text-skin-secondary mt-2 text-sm">
                It's Completely free
              </p>
            </div>
            {/* Social Sign up*/}
            <div className="flex flex-row items-center justify-center space-x-10">
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
            {/* Form */}
            <form
              className="mt-8 space-y-6"
              onSubmit={handleSubmit(submitHandler)}
              autoComplete="off"
              encType="multipart/form-data"
            >
              {inputData.map(
                ({ id, name, type, label, labelFor, errors, register }) => (
                  <div className="relative z-0" key={id}>
                    {name !== "phone" && name !== "area" && (
                      <InputField
                        identity="register"
                        id={id}
                        name={name}
                        type={type}
                        labelFor={labelFor}
                        label={label}
                        errors={errors}
                        register={register}
                        control={control}
                        setPlace={setPlace}
                      />
                    )}
                    {name === "password" && (
                      <p
                        className="px-3 text-xs text-gray-500"
                        id="user_avatar_help"
                      >
                        <span className="text-red">*</span>Password at least 6
                        characters long
                      </p>
                    )}
                    {name === "area" && (
                      <LocationAutoComplete
                        errors={errors}
                        setPlace={setPlace}
                        labelFor={labelFor}
                        label={label}
                      />
                    )}
                    {name === "phone" && (
                      <PhoneInputField errors={errors} control={control} />
                    )}
                  </div>
                )
              )}
              {/* User profile picture */}
              <div className="flex flex-col gap-2">
                <p className="text-skin-secondary text-sm font-medium">
                  Upload a profile picture
                </p>
                <div>
                  <div className="flex items-center gap-3 ">
                    <div className="avatar rounded-full border  bg-white">
                      {userAvatarPreview ? (
                        <img
                          src={userAvatarPreview}
                          alt="preview"
                          className="avatar"
                        />
                      ) : (
                        <UserIcon className="h-6 w-6 text-gray-500 " />
                      )}
                    </div>
                    <label
                      className="form-input cursor-pointer overflow-hidden truncate whitespace-nowrap"
                      for="basicfile"
                    >
                      <input
                        {...register("avatar", {
                          onChange: profileImageHandler,
                        })}
                        type="file"
                        className="sr-only"
                        id="basicfile"
                        aria-describedby="user_avatar_help"
                        data-max-size="2048"
                        accept="image/*"
                        pattern="/.*\.(gif|jpe?g|bmp|png)$/igm"
                      />
                      <span>
                        {file
                          ? file.map((file) => file.name).join(", ")
                          : "Choose file.."}
                      </span>
                    </label>
                    <button
                      className="gray-button"
                      type="reset"
                      onClick={() => setFile(null)}
                    >
                      Reset
                    </button>
                  </div>
                  <div className="text-xs text-gray-500">
                    <p>
                      A profile picture is useful to confirm your are logged
                      into your account
                    </p>
                    <p>
                      <span className="text-red">*</span>File Size not more than
                      2MB
                    </p>
                  </div>
                </div>
              </div>
              <div>
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
                    <>Sign Up &rarr;</>
                  )}
                </button>
              </div>
              <p className="text-md text-skin-secondary mt-10 flex flex-col items-center justify-center text-center">
                <span>Already have an account?</span>
                <Link
                  to="/login"
                  className="text-skin-base cursor-pointer no-underline transition duration-300 ease-in hover:opacity-80"
                >
                  Sign In
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
          className="relative hidden h-full flex-auto items-center justify-center overflow-hidden bg-cover bg-no-repeat p-10 text-white sm:w-1/2 md:flex xl:w-3/5 "
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

export default Registration;
