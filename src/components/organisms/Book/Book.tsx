"use client";

import { useBook } from "@/context/BookContext";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "../Modal/Modal";

export default function Book() {
  const { book } = useBook();
  const [isModalOpen, setModalOpen] = useState({
    state: false,
    title: "",
    actionText: "",
    text: "",
  });
  const [requestInProgress, setRequestInProgress] = useState(false);

  const doLLMRequest = async (gutenbergId: string, action: string) => {
    setRequestInProgress(true);
    try {
      const requestData = {
        id: gutenbergId,
        action: action,
      };

      const bookResponse = await fetch(`/api/llm`, {
        method: "POST",
        body: JSON.stringify(requestData),
      });

      const response = await bookResponse.json();
      const status = [200, 201];
      if (!status.includes(bookResponse.status)) {
        setModalOpen({
          state: false,
          title: "",
          actionText: "",
          text: "",
        });
        setRequestInProgress(false);
        return;
      }

      setModalOpen({
        state: true,
        title: book?.title ?? "",
        actionText: action,
        text: response.data,
      });
    } catch (error) {
      console.log(error);
    }
    setRequestInProgress(false);
  };

  return (
    <>
      <div className="flex w-full flex-col lg:flex-row h-full lg:h-[50%] items-center p-8 lg:px-20 py-8 justify-between gap-10 lg:gap-2">
        <div className="flex flex-col lg:flex-row h-full w-full items-center gap-10">
          <div className="flex relative h-full min-h-[300px]  w-[60%] max-w-[200px] lg:max-w-[210px] rounded-2xl bg-gray-500 border-2 border-solid border-primary">
            <Image
              alt=""
              src={book?.coverPictureUrl ?? "/login-bg.png"}
              fill
              className=" rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-8 h-full w-full">
            <h2 className="font-bold text-[2rem]">
              {book?.title ?? "Book title"}
            </h2>
            <ul className="flex flex-col justify-around min-h-[150px] gap-8 lg:gap-0 text-[1.2rem] lg:text-[1.4rem]">
              <li>Gutenberg ID: {book?.id ?? ""}</li>
              <li>Author: {book?.author ?? ""}</li>
              <li>Published: {book?.metadata?.published ?? ""}</li>
              <li>Language: {book?.metadata?.language ?? ""}</li>
              <li>{book?.metadata?.category ?? ""}</li>
              <li>Rights: {book?.metadata?.rights ?? ""}</li>
            </ul>
          </div>
        </div>
        <div className="flex  w-full lg:w-fit flex-col justify-between h-full gap-6">
          <button
            disabled={requestInProgress}
            className="bg-secondary font-bold lg:px-12 py-6 rounded-lg flex text-white hover:bg-primary transition-all delay-[0.1s] items-center justify-center text-[1.8rem] disabled:bg-gray-500 disabled:cursor-not-allowed"
            onClick={() =>
              setModalOpen({
                state: true,
                title: book?.title ?? "",
                actionText: "CONTEXT",
                text: book?.content ?? "",
              })
            }
          >
            <span className="">
              {requestInProgress ? "LOADING..." : "CONTEXT"}
            </span>
          </button>
          <button
            disabled={requestInProgress}
            className="bg-secondary font-bold lg:px-12 py-6 rounded-lg flex text-white hover:bg-primary transition-all delay-[0.1s] items-center justify-center text-[1.8rem] disabled:bg-gray-500 disabled:cursor-not-allowed"
            onClick={() => doLLMRequest(book?.gutenbergId ?? "", "KEYWORDS")}
          >
            <span className="">
              {requestInProgress ? "LOADING..." : "KEYWORDS"}
            </span>
          </button>
          <button
            disabled={requestInProgress}
            className="bg-secondary font-bold lg:px-12 py-6 rounded-lg flex text-white hover:bg-primary transition-all delay-[0.1s] items-center justify-center text-[1.8rem] disabled:bg-gray-500 disabled:cursor-not-allowed"
            onClick={() => doLLMRequest(book?.gutenbergId ?? "", "SUMMARY")}
          >
            <span className="">
              {requestInProgress ? "LOADING..." : "SUMMARY"}
            </span>
          </button>
          <button
            disabled={requestInProgress}
            className="bg-secondary font-bold lg:px-12 py-6 rounded-lg flex text-white hover:bg-primary transition-all delay-[0.1s] items-center justify-center text-[1.8rem] disabled:bg-gray-500 disabled:cursor-not-allowed"
            onClick={() => doLLMRequest(book?.gutenbergId ?? "", "SENTIMENT")}
          >
            <span className="">
              {requestInProgress ? "LOADING..." : "SENTIMENT"}
            </span>
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen.state}
        onClose={() =>
          setModalOpen({
            state: false,
            title: "",
            actionText: "",
            text: "",
          })
        }
        title={isModalOpen.title}
        text={isModalOpen.text}
        actionText={isModalOpen.actionText}
      />
    </>
  );
}
