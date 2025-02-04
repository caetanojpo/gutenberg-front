import Image from "next/image";
import React from "react";

import LoginForms from "@/components/organisms/LoginForms/LoginForms";

export default function Login() {
  return (
    <div className="flex flex-col w-screen h-screen justify-center lg:justify-start items-center text-[1.8rem] ">
      <div className="flex min-w-[280px] min-h-[280px] max-w-[300px] max-h-[300px] relative">
        <Image src="/full-logo.png" alt="" fill />
      </div>
      <LoginForms />
    </div>
  );
}
