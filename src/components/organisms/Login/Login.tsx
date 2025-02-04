import { LoginInput } from "@/components/atoms/Inputs/LoginInput";
import Image from "next/image";
import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col w-[60%] h-screen lg:w-screen justify-center items-center text-[1.8rem]">
      <div className="flex h-fit">
        <Image src="/full-logo.png" alt="" width={300} height={300} />
      </div>
      <form method="submit" className="flex flex-col justify-around gap-10">
        <div className="h-full w-full text-primary text-[2.4rem] font-light">
          Enter your credentials
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <LoginInput
              name="email"
              label="Email"
              isRequired
              textColor="primary"
            />
          </div>
          <div>
            <LoginInput
              name="password"
              label="Password"
              isRequired
              textColor="primary"
            />
          </div>
        </div>
        <div>
          <button>BUTTON</button>
        </div>
      </form>
    </div>
  );
}
