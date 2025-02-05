"use client";

import React from "react";
import BookIcon from "@/assets/icons/book.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  text: string;
  actionText: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  text,
  actionText,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50  flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg w-full max-h-[80dvh] max-w-[95dvw] lg:max-w-[80dvw] overflow-y-scroll">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-600 ">
          <div className="flex gap-4 items-center">
            <BookIcon className="w-10 h-10 text-secondary" />
            <h3 className="text-xl font-semibold text-primary dark:text-white">
              {title}
            </h3>
          </div>
          <h2 className="hidden lg:flex text-xl font-semibold text-primary dark:text-white">
            {actionText}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg p-2 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className=" text-primary dark:text-gray-400 p-4 lg:p-10">
          <div className="flex border-[1px] border-solid border-gray-300 p-6 rounded-xl overflow-x-auto">
            <p className="text-[1.4rem] ">{text}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end p-4 border-t border-gray-200 dark:border-gray-600">
          <button
            onClick={onClose}
            className="py-2 px-4 text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
