import { DashboardInput } from "@/components/atoms/Inputs/DashboardInput";
import React from "react";

export default function BookSearch() {
  return (
    <form className="flex flex-col lg:flex-row h-fit lg:min-h-[200px] items-center justify-center gap-6 lg:bg-dashboardSearchBg bg-cover bg-no-repeat bg-center px-8 py-10 lg:py-0 lg:px-20">
      <div className="flex w-full flex-1">
        <DashboardInput
          name="bookId"
          placeholder="Search book by Gutenberg ID (eg. 75289)"
        />
      </div>
      <div className="flex w-full lg:w-fit">
        <input
          type="submit"
          className="bg-secondary w-full lg:w-fit font-bold text-white text-[1.6rem] rounded-full p-5 lg:py-6 lg:px-10  hover:bg-primary2 transition-all delay-[0.1s] cursor-pointer"
          value={`SEARCH`}
        />
      </div>
    </form>
  );
}
