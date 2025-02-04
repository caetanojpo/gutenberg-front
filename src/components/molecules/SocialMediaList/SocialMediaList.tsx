import { socialMedia } from "@/constants/socialMedia";
import Link from "next/link";
import React from "react";
import { SocialMediaItem } from "@/types/socialMedia";
import Image from "next/image";

export default function SocialMediaList() {
  return (
    <div className="flex flex-col gap-8 text-[1.2rem]">
      {socialMedia.map(
        ({ icon, text, link }: SocialMediaItem, index: number) => (
          <Link href={link} key={index} className="hover:">
            <div className="flex h-full w-full gap-6 items-center hover:text-highlight">
              <Image
                src={icon}
                alt={text}
                width={20}
                height={20}
                className=""
              />
              <p>{text}</p>
            </div>
          </Link>
        )
      )}
    </div>
  );
}
