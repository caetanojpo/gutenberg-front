import React from "react";
import SmileIcon from "@/assets/icons/smile.svg";
import Link from "next/link";
import UserIcon from "@/assets/icons/user.svg";
import MobileMenu from "@/components/organisms/MobileMenu/MobileMenu";

export default function Header() {
  return (
    <div className="flex w-full h-[10%] items-center p-8 justify-between">
      <div className="flex lg:hidden mr-10">
        <MobileMenu />
      </div>
      <div className="flex w-full gap-2 items-center">
        <h3 className="flex text-[1.4rem] text-primary">
          <span className="hidden lg:flex mr-1">Hello {"email"}.</span> Nice to
          see you here!{" "}
        </h3>
        <SmileIcon className="w-7 h-7 lg:w-10 lg:h-10 text-secondary" />
      </div>
      <div className="flex">
        <Link href="/">
          <div className="w-12 h-12 flex bg-primary rounded-full cursor-pointer items-center justify-center">
            <UserIcon className="w-7 h-7 text-white" />
          </div>
        </Link>
      </div>
    </div>
  );
}
