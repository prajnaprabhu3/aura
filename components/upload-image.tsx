"use client";

import Image from "next/image";
import React from "react";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600"],
});

export default function UploadImage() {
  const handleFile = () => {};

  return (
    <div>
      <h4
        className={`${caveat.className} text-gray-400 dark:text-zinc-700 text-2xl absolute top-64 left-[28%] -rotate-12 w-34 `}
      >
        Drag and Drop your File
      </h4>
      <div className="bg-white dark:bg-[#1B1B1B] p-3 rounded-xl drop-shadow-sm">
        <div className="flex flex-col justify-center items-center w-80 h-44 p-4 border border-dashed border-gray-300 dark:border-zinc-700 rounded-lg bg-primaryLight dark:bg-primaryDark">
          <input
            type="file"
            onChange={handleFile}
            className="w-80 h-44  opacity-0 z-10 absolute cursor-pointer"
            name="file"
          />
          <Image
            src={"/gallery.png"}
            width={60}
            height={50}
            alt="gallery"
            className="opacity-80"
          />

          <p
            className={`${caveat.className} text-gray-400 dark:text-zinc-700 text-lg mt-2`}
          >
            or <span className="underline">click here</span> to upload File
          </p>
        </div>
      </div>
    </div>
  );
}
