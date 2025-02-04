"use client";
import React, { useState, useEffect, ReactNode } from "react";
import EyeIcon from "@/assets/icons/eye.svg";
import ClosedEyeIcon from "@/assets/icons/eye-closed.svg";

interface IFormsInput {
  label?: string;
  name: string;
  propsType?: string;
  isRequired?: boolean;
  placeholder?: string;
  value?: string;
  state?: boolean;
  error?: boolean;
  icon?: ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LoginInput: React.FC<IFormsInput> = ({
  name,
  label = "",
  propsType = "text",
  isRequired = false,
  placeholder = "",
  error,
  value,
  state = false,
  icon,
  onChange,
}) => {
  const [showPass, setShowPass] = useState(false);
  const [type, setType] = useState<string>(propsType);
  const [loading, setLoading] = useState<boolean>(false);

  const originalType = propsType;

  useEffect(() => {
    setLoading(state);
  }, [state]);

  const changeViewPass = () => {
    if (!showPass) {
      setType("password");
    } else {
      setType("text");
    }

    setShowPass((prev) => !prev);
  };

  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-md lg:text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <div className="relative flex">
        <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
          {icon}
        </div>
        <input
          type={type}
          id={name}
          required={isRequired}
          name={name}
          value={value}
          className={`${error ? "bg-red-300" : "bg-gray-50"} border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full  ps-12 lg:ps-10 p-4 lg:p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary text-[1.5rem] lg:text-[1rem]`}
          placeholder={placeholder}
          onChange={onChange}
          disabled={loading}
        />
        <div className="absolute inset-y-0 end-0 flex items-center pe-2 cursor-pointer">
          {originalType === "password" ? (
            <div>
              {showPass ? (
                <ClosedEyeIcon
                  className="w-[2rem] h-[2rem] lg:w-[1.6rem] lg:h-[1.6rem] text-secondary cursor-pointer"
                  onClick={changeViewPass}
                />
              ) : (
                <EyeIcon
                  className={`w-[2rem] h-[2rem] lg:w-[1.6rem] lg:h-[1.6rem] ${error ? "text-highlight" : "text-secondary"} cursor-pointer`}
                  onClick={changeViewPass}
                />
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};
