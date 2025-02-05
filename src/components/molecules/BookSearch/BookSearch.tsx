"use client";

import { DashboardInput } from "@/components/atoms/Inputs/DashboardInput";
import { IBook, useBook } from "@/context/BookContext";
import { useBooksStorage } from "@/context/BooksStorageContext";
import React, { useState } from "react";

export default function BookSearch() {
  const [formData, setFormData] = useState({
    id: "",
  });
  const { book, setBook } = useBook();
  const { addBook } = useBooksStorage();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const submitLogin = async (event: React.FormEvent) => {
    try {
      event.preventDefault();
      const bookResponse = await fetch(`/api/book`, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const response = await bookResponse.json();
      const bookers: IBook = response.data;
      const status = [200, 201];
      if (!status.includes(bookResponse.status)) {
        setFormData({
          id: "",
        });
        return;
      }

      setBook({ ...bookers });
      addBook({
        gutenbergId: bookers.gutenbergId,
        author: bookers.author,
        coverPictureUrl: bookers.coverPictureUrl,
        downloads: bookers.metadata.downloads,
        title: bookers.title,
      });
      console.log(book);
    } catch (error) {
      console.log(error);
    }

    setFormData({
      id: "",
    });
  };
  return (
    <form
      className="flex flex-col lg:flex-row h-fit lg:min-h-[200px] items-center justify-center gap-6 lg:bg-dashboardSearchBg bg-cover bg-no-repeat bg-center px-8 py-10 lg:py-0 lg:px-20"
      onSubmit={submitLogin}
    >
      <div className="flex w-full flex-1">
        <DashboardInput
          name="id"
          placeholder="Search book by Gutenberg ID (eg. 75289)"
          value={formData.id}
          onChange={handleInputChange}
          isRequired
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
