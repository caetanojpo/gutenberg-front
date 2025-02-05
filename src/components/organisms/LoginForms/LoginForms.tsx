"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import LoginLoading from "../LoginLoading/LoginLoading";
import { LoginInput } from "@/components/atoms/Inputs/LoginInput";
import PasswordIcon from "@/assets/icons/password.svg";
import UserIcon from "@/assets/icons/user.svg";

export default function LoginForms() {
  const router = useRouter();
  const [loginIn, setLoginIn] = useState(false);
  const [reqState, setReqState] = useState(true);

  const CleanError = {
    state: false,
    message: "",
  };
  const [error, setError] = useState(CleanError);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitLogin = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      setLoginIn(true);
      const authResponse = await fetch(`/api/login`, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const authorized = await authResponse.json();
      const status = [200, 201];
      if (!status.includes(authResponse.status)) {
        setError({ state: true, message: authorized.message });
        setReqState(true);
        setLoginIn(false);
        setFormData({
          email: "",
          password: "",
        });
        return;
      }

      if (formData.email !== authorized.data.email) {
        throw new Error();
      }

      router.push("/dashboard");
    } catch (error) {
      console.log(error);
      setReqState(false);
      setTimeout(() => {
        setReqState(true);
        setLoginIn(false);
      }, 3000);
    }

    setFormData({
      email: "",
      password: "",
    });
  };
  return loginIn ? (
    <LoginLoading state={reqState} />
  ) : (
    <>
      <form
        method="submit"
        className="flex flex-col justify-around gap-10 w-[80%] lg:w-[50%]"
        onSubmit={submitLogin}
      >
        <div className="h-full w-full text-primary text-[2.4rem] font-light">
          Enter your credentials
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <LoginInput
              name="email"
              label="Email"
              isRequired
              icon={<UserIcon className="w-8 h-8  text-secondary" />}
              propsType="text"
              value={formData.email}
              onChange={handleInputChange}
              error={error.state}
            />
          </div>
          <div>
            <LoginInput
              name="password"
              label="Password"
              isRequired
              icon={<PasswordIcon className="w-8 h-8  text-secondary" />}
              propsType="password"
              placeholder="********"
              onChange={handleInputChange}
              error={error.state}
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-full ">
          <input
            type="submit"
            className="bg-primary text-white text-[2.4rem]  rounded-lg p-5  w-full hover:bg-secondary hover:text-primary transition-all delay-[0.1s] lg:w-[30%] cursor-pointer"
            value={`Login`}
          />
        </div>
      </form>
    </>
  );
}
