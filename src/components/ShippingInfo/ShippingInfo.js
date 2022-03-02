import { ArrowLeftIcon } from "@heroicons/react/solid";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import InputField from "../../layout/Form/InputField";
import PhoneInputField from "../../layout/Form/PhoneInputField";
import SelectField from "../../layout/Form/SelectField";
import { shippingFormSchema } from "../../Validation/UserFormValidation";
import "./styles.css";

const ShippingInfo = ({ onSubmit, shippingInfo, user }) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(shippingFormSchema) });

  const inputData = [
    {
      id: "name",
      name: "name",
      type: "text",
      labelFor: "name",
      autoComplete: "off",
      label: "Enter Your Name",
      errors: errors.name?.message,
      register: register,
      style: "relative z-0 col-span-6 sm:col-span-3",
    },
    {
      id: "email",
      name: "email",
      type: "email",
      labelFor: "email",
      autoComplete: "off",
      label: "Enter Your Email",
      errors: errors.email?.message,
      register: register,
      style: "relative z-0 col-span-6 sm:col-span-4",
    },
    {
      id: "address",
      name: "address",
      type: "text",
      labelFor: "address",
      autoComplete: "off",
      label: "Enter Your Address",
      errors: errors.address?.message,
      register: register,
      style: "relative z-0 col-span-6 ",
    },
    {
      id: "state",
      name: "state",
      type: "text",
      labelFor: "state",
      label: "State",
      errors: errors.state?.message,
      register: register,
      style: "relative z-0 col-span-6 sm:col-span-6 lg:col-span-2",
    },
    {
      id: "zipCode",
      name: "zipcode",
      type: "text",
      labelFor: "zipCode",
      label: "Enter Zip Code",
      errors: errors.zipCode?.message,
      register: register,
      style: "relative z-0 col-span-6 sm:col-span-6 lg:col-span-2",
    },
  ];

  const selectCity = [
    {
      id: 0,
      value: "",
      text: "Select Your City",
    },
    {
      id: 1,
      value: "dhaka",
      text: "Dhaka",
    },
    {
      id: 2,
      value: "gazipur",
      text: "Gazipur",
    },
    {
      id: 3,
      value: "narayanganj",
      text: "Narayanganj",
    },
    {
      id: 4,
      value: "rangpur",
      text: "Rangpur",
    },
    {
      id: 5,
      value: "barisal",
      text: "Barisal",
    },
    {
      id: 6,
      value: "sylhet",
      text: "Sylhet",
    },
    {
      id: 7,
      value: "khulna",
      text: "Khulna",
    },
  ];

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-2 md:gap-6 ">
          <div className="mx-auto mt-5 md:col-span-2 md:mt-0 ">
            <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <h1 className="text-skin-primary bg-gray-50 px-4 py-5 text-left text-xl font-medium leading-6 shadow sm:px-6">
                  Shipping Information
                </h1>
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    {/* Name */}
                    {inputData
                      .slice(0, 1)
                      .map(
                        ({
                          id,
                          name,
                          type,
                          autoComplete,
                          register,
                          errors,
                          label,
                          labelFor,
                          style,
                        }) => (
                          <div className={style} key={id}>
                            <InputField
                              id={id}
                              name={name}
                              type={type}
                              autoComplete={autoComplete}
                              register={register}
                              errors={errors}
                              label={label}
                              labelFor={labelFor}
                              defaultValue={
                                shippingInfo ? shippingInfo?.name : user?.name
                              }
                            />
                          </div>
                        )
                      )}
                    {/* Phone Number */}
                    <div className="relative z-0 col-span-6 sm:col-span-3">
                      <PhoneInputField
                        control={control}
                        errors={errors.phone?.message}
                      />
                    </div>
                    {/* Email & Address */}
                    {inputData
                      .slice(1, 4)
                      .map(
                        ({
                          id,
                          name,
                          type,
                          autoComplete,
                          register,
                          errors,
                          label,
                          labelFor,
                          style,
                        }) => (
                          <div className={style} key={id}>
                            <InputField
                              id={id}
                              name={name}
                              type={type}
                              autoComplete={autoComplete}
                              register={register}
                              errors={errors}
                              label={label}
                              labelFor={labelFor}
                              defaultValue={
                                id === "email"
                                  ? shippingInfo
                                    ? shippingInfo?.email
                                    : user?.email
                                  : id === "address" && shippingInfo
                                  ? shippingInfo?.address
                                  : user?.address
                              }
                            />
                          </div>
                        )
                      )}
                    {/* Select City */}
                    <div className="relative z-0 col-span-6 sm:col-span-6 lg:col-span-2">
                      <SelectField
                        data={selectCity}
                        register={register}
                        registerAs="city"
                        errors={errors.city?.message}
                      />
                    </div>
                    {/* Zip Code */}
                    {inputData
                      .slice(4, 5)
                      .map(
                        ({
                          id,
                          name,
                          type,
                          autoComplete,
                          register,
                          errors,
                          label,
                          labelFor,
                          style,
                        }) => (
                          <div className={style} key={id}>
                            <InputField
                              id={id}
                              name={name}
                              type={type}
                              autoComplete={autoComplete}
                              register={register}
                              errors={errors}
                              label={label}
                              labelFor={labelFor}
                            />
                          </div>
                        )
                      )}
                  </div>
                </div>
                <div className="flex content-center justify-between bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <Link
                    to="/products"
                    className="text-skin-secondary flex items-center gap-3"
                  >
                    <ArrowLeftIcon className="h-4 w-4" /> Continue Shopping
                  </Link>
                  <button type="submit" className="green-button">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingInfo;
