import React from "react";

export default function page() {
  return (
    <main className="h-screen w-screen flex">
      {/* MENU LATERAL */}
      <div>
        <div>LOGO</div>
        <div>NAVIGATION</div>
      </div>
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
