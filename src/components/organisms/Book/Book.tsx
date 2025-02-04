import Image from "next/image";
import React from "react";

export default function Book() {
  return (
    <div className="flex w-full flex-col lg:flex-row h-full lg:h-[50%] items-center p-8 lg:px-20 py-8 justify-between gap-10 lg:gap-2">
      <div className="flex flex-col lg:flex-row h-full w-full items-center gap-10">
        <div className="flex relative h-full min-h-[300px]  w-[60%] max-w-[200px] lg:max-w-[210px] rounded-2xl bg-gray-500 border-2 border-solid border-primary">
          <Image alt="" src="/login-bg.png" fill className=" rounded-2xl" />
        </div>
        <div className="flex flex-col gap-8 h-full w-full">
          <h2 className="font-bold text-[2rem]">Book title</h2>
          <ul className="flex flex-col justify-around min-h-[150px] gap-8 lg:gap-0 text-[1.2rem] lg:text-[1.4rem]">
            <li>Gutenberg ID:</li>
            <li>Author:</li>
            <li>Published:</li>
            <li>Language:</li>
            <li>Category:</li>
            <li>Rights:</li>
          </ul>
        </div>
      </div>
      <div className="flex  w-full lg:w-fit flex-col justify-between h-full gap-6">
        <button className="bg-secondary font-bold lg:px-12 py-6 rounded-lg flex text-white hover:bg-primary transition-all delay-[0.1s] items-center justify-center text-[1.8rem]">
          <span className="">CONTENT</span>
        </button>
        <button className="bg-secondary font-bold lg:px-12 py-6 rounded-lg flex text-white hover:bg-primary transition-all delay-[0.1s] items-center justify-center text-[1.8rem]">
          <span className="">CONTENT</span>
        </button>
        <button className="bg-secondary font-bold lg:px-12 py-6 rounded-lg flex text-white hover:bg-primary transition-all delay-[0.1s] items-center justify-center text-[1.8rem]">
          <span className="">CONTENT</span>
        </button>
        <button className="bg-secondary font-bold lg:px-12 py-6 rounded-lg flex text-white hover:bg-primary transition-all delay-[0.1s] items-center justify-center text-[1.8rem]">
          <span className="">CONTENT</span>
        </button>
      </div>
    </div>
  );
}
