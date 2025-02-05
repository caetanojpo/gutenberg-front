import Image from "next/image";
import React from "react";
import DownloadIcon from "@/assets/icons/download.svg";
import { IBook, useBook } from "@/context/BookContext";

interface BookCardProps {
  bookData: {
    gutenbergId: string;
    title: string;
    author: string;
    coverPictureUrl: string;
    downloads: number;
  };
}

const BookCard: React.FC<BookCardProps> = ({ bookData }) => {
  const { setBook } = useBook();

  const loadBook = async (gutenbergId: string) => {
    try {
      const bookData = { id: gutenbergId };
      const bookResponse = await fetch(`/api/book`, {
        method: "POST",
        body: JSON.stringify(bookData),
      });

      const response = await bookResponse.json();
      const bookers: IBook = response.data;
      const status = [200, 201];
      if (!status.includes(bookResponse.status)) {
        return;
      }

      setBook({ ...bookers });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="rounded-lg w-fit px-8 lg:px-2 py-2 flex items-center justify-center cursor-pointer hover:scale-105 transition-all delay-75"
      onClick={() => loadBook(bookData.gutenbergId)}
    >
      <div className="flex flex-col h-full lg:w-full gap-6 justify-center">
        {/* Cover Image */}
        <div className="flex relative h-full min-h-[150px] lg:min-h-[200px] w-full min-w-[100px] lg:min-w-[100px] max-w-[100px] lg:max-w-[135px] rounded-2xl bg-gray-500 border-2 border-solid border-primary">
          <Image
            alt={bookData.title ?? ""}
            src={bookData.coverPictureUrl ?? ""}
            fill
            className="rounded-2xl object-contain"
          />
        </div>

        {/* Book Info */}
        <div className="flex flex-col gap-6 h-full w-full">
          <h2 className="font-bold text-[1rem] lg:text-[1.4rem]">
            {bookData.title ?? ""}
          </h2>
          <p className="hidden lg:block text-[0.8rem] lg:text-[1.2rem]">
            {bookData.author ?? ""}
          </p>

          {/* Downloads */}
          <div className="hidden lg:flex items-center gap-1">
            <DownloadIcon className="text-secondary lg:w-8 lg:h-8" />
            <span className="text-[0.8rem] lg:text-[1.2rem]">
              {bookData.downloads ?? ""}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
