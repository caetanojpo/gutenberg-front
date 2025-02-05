"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface IMetadata {
  published?: string;
  language?: string;
  genres?: string[];
  rights?: string;
  category?: string;
  downloads: number;
}

export interface IBook {
  id: string;
  gutenbergId: string;
  title: string;
  author: string;
  coverPictureUrl: string;
  content?: string;
  metadata: IMetadata;
}

interface BookContextType {
  book: IBook | null;
  setBook: (book: IBook) => void;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [book, setBook] = useState<IBook | null>(null);

  return (
    <BookContext.Provider value={{ book, setBook }}>
      {children}
    </BookContext.Provider>
  );
};

export const useBook = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBook must be used within a BookProvider");
  }
  return context;
};
