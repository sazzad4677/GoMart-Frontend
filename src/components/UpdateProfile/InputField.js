import React from 'react';

const InputField = ({ id, type, name, defaultValue, register, errors }) => {
    return (
      <div className="grid grid-cols-2">
        <label htmlFor={name} className="px-4 py-2 font-semibold">
          {name}
        </label>
        <input
          className={`text-sm block w-full appearance-none rounded-2xl border-0 border-b border-t-0 bg-transparent px-4  text-base focus:ring-0 
   ${
     Object.keys(errors).length
       ? "border-red focus:border-red"
       : "border-skin-base focus:border-skin-base"
   }`}
          id={id}
          type={type}
          placeholder={`Your ${name}`}
          {...register(id, { min: 3, max: 255 })}
          defaultValue={defaultValue}
        ></input>
      </div>
    );
  };

export default InputField;