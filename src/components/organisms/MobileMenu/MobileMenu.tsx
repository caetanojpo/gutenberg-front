"use client";

import React, { useState } from "react";
import DashboardIcon from "@/assets/icons/dashboard.svg";
import Link from "next/link";
import Image from "next/image";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className="flex items-center justify-center p-2 w-10 h-10 text-sm text-primary rounded-lg hover:bg-primary2 focus:outline-none focus:ring-2 focus:ring-primary2 dark:text-primary dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="drawer-example"
        aria-expanded={isOpen}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <div
        className={`fixed top-0 flex flex-col justify-between left-0 z-40 h-screen  overflow-y-auto transition-transform bg-primary w-80 dark:bg-gray-800 
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        tabIndex={-1}
        aria-labelledby="drawer-label"
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="text-primary bg-transparent hover:bg-primary2 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <Link href="" onClick={() => setIsOpen(false)}>
          <div className="flex mt-14 gap-4 items-center px-8 hover:bg-secondary text-white hover:text-primary py-4 cursor-pointer">
            <DashboardIcon className="w-8 h-8 " />
            <span className=" text-[1.6rem]">Dashboard</span>
          </div>
        </Link>
        <div>
          <Image alt="" src={"/logo-white.png"} width={200} height={200} />
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}
