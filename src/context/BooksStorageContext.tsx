"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface StoredBook {
  gutenbergId: string;
  title: string;
  author: string;
  coverPictureUrl: string;
  downloads: number;
}

interface BooksStorageContextType {
  booksStorage: StoredBook[];
  addBook: (book: StoredBook) => void;
  removeBook: (id: string) => void;
  clearBooksStorage: () => void;
}

const BooksStorageContext = createContext<BooksStorageContextType | undefined>(
  undefined
);

export const BooksStorageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [booksStorage, setBooksStorage] = useState<StoredBook[]>([]);

  const addBook = (book: StoredBook) =>
    setBooksStorage((prev) => {
      if (prev.some((b) => b.gutenbergId === book.gutenbergId)) {
        return prev;
      }
      return [...prev, book];
    });
  const removeBook = (id: string) =>
    setBooksStorage((prev) => prev.filter((book) => book.gutenbergId !== id));

  const clearBooksStorage = () => setBooksStorage([]);

  return (
    <BooksStorageContext.Provider
      value={{ booksStorage, addBook, removeBook, clearBooksStorage }}
    >
      {children}
    </BooksStorageContext.Provider>
  );
};

export const useBooksStorage = (): BooksStorageContextType => {
  const context = useContext(BooksStorageContext);
  if (!context) {
    throw new Error(
      "useBooksStorage must be used within a BooksStorageProvider"
    );
  }
  return context;
};
