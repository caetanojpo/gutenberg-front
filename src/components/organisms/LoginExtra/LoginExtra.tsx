"use client";

import PagesList from "@/components/molecules/PagesList/PagesList";
import SocialMediaList from "@/components/molecules/SocialMediaList/SocialMediaList";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function LoginExtra() {
  const [exists, setExists] = useState(false);

  useEffect(() => {
    const targetId = "#login-loading";
    const observer = new MutationObserver(() => {
      setExists(!!document.querySelector(targetId));
    });

    observer.observe(document.body, { childList: true, subtree: true });

    setExists(!!document.querySelector(targetId));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`hidden ${exists ? "hidden" : "lg:flex"}  h-screen w-[45%] bg-loginBg bg-cover bg-no-repeat bg-right flex-col justify-between p-20 text-white z-0`}
    >
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
