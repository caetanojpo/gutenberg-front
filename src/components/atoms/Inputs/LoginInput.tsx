"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

interface IFormsInput {
  label?: string;
  name: string;
  propsType?: string;
  isRequired?: boolean;
  placeholder?: string;
  value?: string;
  textColor?: string;
  state?: boolean;
  error?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LoginInput: React.FC<IFormsInput> = ({
  name,
  label = "",
  propsType = "text",
  isRequired = false,
  placeholder = "",
  textColor = "",
  error,
  value,
  state = false,
  onChange,
}) => {
  const [showPass, setShowPass] = useState(false);
  const [type, setType] = useState<string>(propsType);
  const [loading, setLoading] = useState<boolean>(false);

  const originalType = propsType;

  useEffect(() => {
    setLoading(state);
  }, [state]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const changeViewPass = () => {
    if (!showPass) {
      setType("password");
    } else {
      setType("text");
    }

    setShowPass((prev) => !prev);
  };

  return (
    <label
      className={`flex flex-col text-${
        !textColor ? "[black]" : textColor
      } w-full gap-1 lg:text-[1.4rem]`}
    >
      {label}
      <div
        className={`flex w-full shadow-inner ${error ? `border-2 border-solid border-danger` : ""} ${
          loading ? "bg-suport-100" : "bg-[#F5FCFF]"
        }  items-center rounded-[2px]  text-black`}
      >
        <input
          name={name}
          type={type}
          required={isRequired}
          placeholder={placeholder}
          value={value}
          className={`w-full p-3 border-b-4 border-solid border-primary  ${
            loading ? "bg-suport-100" : "bg-[#F5FCFF]"
          } focus:outline-0, text-[${textColor}]`}
          onChange={onChange}
          disabled={loading}
        />
        {originalType === "password" ? (
          //   <Icon
          //     className="text-primary-0 text-[1.6rem] mr-2 lg:text-[2.4rem] cursor-pointer "
          //     icon={!showPass ? "mdi:show" : "mdi:hide"}
          //     color={error ? "#DE2121" : "#1FADE1"}
          //     onClick={changeViewPass}
          //   />
          <Image src="/icons/eye.svg" alt="" width={24} height={24} />
        ) : (
          ""
        )}
      </div>
    </label>
  );
};
