import Image from "next/image";
import React from "react";
import DownloadIcon from "@/assets/icons/download.svg";

export default function BookCard() {
  return (
    <div className="rounded-lg w-fit px-8 lg:px-2 py-2 flex items-center justify-center cursor-pointer hover:scale-105 transition-all delay-75">
      <div className="flex flex-col h-full  lg:w-full  gap-6 justify-center ">
        <div className="flex relative h-full min-h-[150px] lg:min-h-[200px] w-full min-w-[100px] lg:min-w-[150px] max-w-[100px]  lg:max-w-[200px] rounded-2xl bg-gray-500 border-2 border-solid border-primary">
          <Image alt="" src="/login-bg.png" fill className=" rounded-2xl" />
        </div>
        <div className="flex flex-col gap-6 h-full w-full">
          <h2 className="font-bold text-[1rem] lg:text-[1.4rem]">Book title</h2>
          <p className="hidden lg:initial text-[0.8rem] lg:text-[1.2rem]">
            Author name
          </p>
          <div className="hidden lg:flex items-center gap-1">
            <DownloadIcon className="text-secondary lg:w-8 lg:h-8" />
            <span className="text-[0.8rem] lg:text-[1.2rem]">100</span>
          </div>
        </div>
      </div>
    </div>
  );
}
