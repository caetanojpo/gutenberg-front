import SideMenu from "@/components/organisms/SideMenu/SideMenu";
import React from "react";
import Header from "@/components/organisms/Header/Header";

export default function page() {
  return (
    <main className="h-screen w-screen flex">
      <SideMenu />
      <div className="flex flex-col w-full h-full">
        <Header />
        {/* SEARCH BAR */}
        <div>
          <div>INPUT</div>
          <div>BUTTON</div>
        </div>
        {/* BOOK LOAD */}
        <div>
          <div>
            <div>BOOK IMAGE</div>
            <div>
              <ul>BOOK INFOS</ul>
            </div>
          </div>
          <div>ACTIONS</div>
        </div>
        {/* LAST SEEN */}
        <div>
          <div>DIVIDER</div>
          <div>BOOKS GRID</div>
        </div>
      </div>
    </main>
  );
}
