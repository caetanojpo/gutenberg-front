"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import ErrorIcon from "@/assets/icons/error.svg";

interface ILoginLoading {
  state?: boolean;
}

const LoginLoading: React.FC<ILoginLoading> = ({ state = true }) => {
  const famousQuotes: string[] = [
    "To be or not to be, that is the question.", // Hamlet - Shakespeare
    "All that glitters is not gold.", // The Merchant of Venice - Shakespeare
    "It was the best of times, it was the worst of times.", // A Tale of Two Cities - Charles Dickens
    "The only way to do great work is to love what you do.", //  Widely attributed to Steve Jobs, but likely inspired by various sources, including quotes from Benjamin Franklin. It's become a famous quote nonetheless.
    "The unexamined life is not worth living.", // Socrates
    "I think, therefore I am.", // René Descartes
    "The truth will set you free.", //  John 8:32 (Bible) - Often used as a standalone famous quote.
    "Knowledge is power.", // Francis Bacon
    "Love is patient, love is kind.", // 1 Corinthians 13:4 (Bible) -  Often used as a standalone famous quote.
    "The pen is mightier than the sword.", // Edward Bulwer-Lytton
  ];
  const [randomPhrase, setRandomPhrase] = useState(famousQuotes[0]);

  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const random = Math.random();
    console.log(random);
    const randomIndex = Math.floor(random * famousQuotes.length);
    console.log(randomIndex);
    setRandomPhrase(famousQuotes[randomIndex]);
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 5;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 150);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main
      id="login-loading"
      className="w-dvw h-full bg-primary flex items-center justify-center absolute z-50"
    >
      <section className="flex h-full w-[80%] lg:w-1/2 items-center justify-center flex-col text-center">
        <div className="h-[10%] w-full relative mb-10">
          {state ? (
            <Image src={"/logo.png"} fill className="object-contain" alt="" />
          ) : (
            <div className="flex w-full justify-center items-center">
              <ErrorIcon className="h-[5rem] w-[5rem] text-highlight" />
            </div>
          )}
        </div>
        <div className="mb-4">
          <p className="text-white text-[1.6rem] font-thin leading-8">
            {state ? randomPhrase : "An error ocurred, please try again!"}
          </p>
        </div>
        <div className="mt-3 lg:mt-0 w-[90%] lg:w-1/2">
          <div className="w-full bg-gray-200 rounded-full h-6 dark:bg-gray-700">
            <div
              className={`${
                state ? "bg-primary-0" : "bg-danger"
              } h-6 rounded-[8px]  ${
                state ? "transition-all ease-linear" : ""
              }`}
              style={{ width: `${state ? progress : "100"}%` }}
            ></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginLoading;
