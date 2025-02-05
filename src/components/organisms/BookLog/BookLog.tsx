"use client";

import React from "react";
import BookCard from "@/components/molecules/BookCard/BookCard";
import { useBooksStorage } from "@/context/BooksStorageContext";

export default function BookLog() {
  const { booksStorage } = useBooksStorage();
  return (
    <div className="w-full h-full flex flex-col justify-center text-[1.4rem] mt-10">
      <div className="flex items-center">
        <h3 className="text-highlight font-bold ml-4 mr-2 lg:text-[1.6rem]">
          Last seen books
        </h3>
        <span className="flex-1 h-[1px] bg-highlight" />
      </div>

      <div className="w-[100%] h-full flex items-center justify-center p-8 mt-4">
        <div className="h-full w-full grid grid-cols-auto-fit gap-4 ">
          {booksStorage.length > 0 ? (
            booksStorage.map((book) => (
              <BookCard key={book.gutenbergId} bookData={book} />
            ))
          ) : (
            <p className="text-gray-500">No books found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
