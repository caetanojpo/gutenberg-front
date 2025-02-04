import Link from "next/link";
import React from "react";

export default function PagesList() {
  return (
    <div className="w-full flex items-middle justify-center gap-10 text-[1.4rem]">
      <Link href="" className="hover:text-highlight">
        <p>contact</p>
      </Link>
      <span className="">|</span>
      <Link href="" className="hover:text-highlight">
        <p>about</p>
      </Link>
    </div>
  );
}
