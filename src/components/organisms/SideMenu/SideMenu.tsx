import { NavigationItem } from "@/types/navigationList";
import React from "react";
import DashboardIcon from "@/assets/icons/dashboard.svg";
import Image from "next/image";
import Link from "next/link";

export default function SideMenu() {
  const navigationList: NavigationItem[] = [
    {
      icon: <DashboardIcon className="w-10 h-10 text-secondary" />,
      text: "Dashboard",
      link: "",
    },
  ];
  return (
    <>
      <div className="hidden lg:flex flex-col h-full w-[15%] border-r-[1px] border-solid border-gray-200">
        <div className="">
          <Image alt="" src="/full-logo.png" width={200} height={200} />
        </div>
        <div>
          <ul>
            {navigationList.map(
              ({ icon, text, link }: NavigationItem, index: number) => (
                <Link key={index} href={link}>
                  <li className="flex gap-4 items-center px-8 hover:bg-primary2 py-4 lg:py-8 cursor-pointer">
                    <div>{icon}</div>
                    <span className="text-primary text-[1.8rem]">{text}</span>
                  </li>
                </Link>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
