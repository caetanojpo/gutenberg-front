"use client";
import React, { useState, useEffect } from "react";
import SearchIcon from "@/assets/icons/search.svg";

interface IFormsInput {
  label?: string;
  name: string;
  isRequired?: boolean;
  placeholder?: string;
  value?: string;
  state?: boolean;
  error?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const DashboardInput: React.FC<IFormsInput> = ({
  name,
  isRequired = false,
  placeholder = "",
  error,
  value,
  state = false,
  onChange,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(state);
  }, [state]);

  return (
    <>
      <div className="relative flex w-full h-fit">
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          id={name}
          required={isRequired}
          name={name}
          value={value}
          className={`${error ? "bg-red-300" : "bg-gray-50"} border border-gray-300 text-primary text-sm rounded-full focus:ring-primary focus:border-primary block w-full placeholder:text-gray-300 ps-12 lg:ps-10 p-6  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary text-[12px] lg:text-[1.4rem]`}
          placeholder={placeholder}
          onChange={onChange}
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            target.value = target.value.replace(/\D/g, "");
          }}
          disabled={loading}
        />
        <div className="absolute inset-y-0 end-0 flex items-center pe-6 ">
          <SearchIcon className="w-8 h-8 lg:w-10 lg:h-10 text-secondary" />
        </div>
      </div>
    </>
  );
};
