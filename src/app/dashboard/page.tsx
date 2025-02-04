import SideMenu from "@/components/organisms/SideMenu/SideMenu";
import React from "react";

export default function page() {
  return (
    <main className="h-screen w-screen flex">
      <SideMenu />
      <div>
        {/* HEADER */}
        <div>
          <div>GREETINGS</div>
          <div>PROFILE ICON</div>
        </div>
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
