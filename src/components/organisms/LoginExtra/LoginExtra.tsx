import PagesList from "@/components/molecules/PagesList/PagesList";
import SocialMediaList from "@/components/molecules/SocialMediaList/SocialMediaList";
import Image from "next/image";
import React from "react";

export default function LoginExtra() {
  return (
    <div className="hidden lg:flex h-screen w-[45%] bg-loginBg bg-cover bg-no-repeat bg-right flex-col justify-between p-20 text-white">
      <div className="w-full flex flex-col items-middle justify-center">
        <div className="">
          <Image
            alt=""
            src="/logo-white-min.png"
            width={500}
            height={500}
            className=""
          />
        </div>
        <p className="text-[1.4rem] text-center ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis
          gravida ante ut interdum. In vitae felis lectus. Ipsum dolor sit amet
          Ipsum dolor sit amet.
        </p>
      </div>
      <SocialMediaList />
      <PagesList />
    </div>
  );
}
