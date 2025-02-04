import SideMenu from "@/components/organisms/SideMenu/SideMenu";
import React from "react";
import Header from "@/components/organisms/Header/Header";
import BookSearch from "@/components/molecules/BookSearch/BookSearch";
import Book from "@/components/organisms/Book/Book";
import BookLog from "@/components/organisms/BookLog/BookLog";

export default function page() {
  return (
    <main className="h-full min-h-screen w-screen flex ">
      <SideMenu />
      <div className="flex flex-col w-full h-full">
        <Header />
        <BookSearch />
        <Book />
        <BookLog />
      </div>
    </main>
  );
}
