"use client";

import Image from "next/image";
import React, { useContext, useEffect } from "react";
import { Caveat } from "next/font/google";
import { getImageUploadData } from "@/libs/upload";
import { UploadContext } from "@/context/useUploadData";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600"],
});

export default function UploadImage() {
  const { upload, setUpload, colorPalette, setColorPalette } =
    useContext(UploadContext);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const { uploadValue, colorPaletteList } = await getImageUploadData(file);
      setUpload(uploadValue);
      setColorPalette(colorPaletteList);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  useEffect(() => {
    console.log(upload, "upload");
    console.log(colorPalette, "palette");
  }, [upload, colorPalette]);

  return (
    <div>
      <h4
        className={`${caveat.className} text-gray-400 dark:text-zinc-700 text-2xl absolute top-64 left-[28%] -rotate-12 w-34`}
      >
        Drag and Drop your File
      </h4>
      <div className="bg-white dark:bg-[#1B1B1B] p-3 rounded-xl drop-shadow-sm w-fit">
        <div className="flex flex-col justify-center items-center w-80 h-44 p-4 border border-dashed border-gray-300 dark:border-zinc-700 rounded-lg bg-primaryLight dark:bg-primaryDark">
          <input
            type="file"
            onChange={handleUpload}
            className="w-80 h-44 opacity-0 z-10 absolute cursor-pointer"
            name="file"
          />
          <Image
            src="/gallery.png"
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
      {upload && (
        <div className="mt-4">
          <h3>Uploaded Image:</h3>
          <img
            src={upload}
            alt="Uploaded"
            style={{ maxWidth: "100%", maxHeight: "200px" }}
          />
        </div>
      )}
      {colorPalette && colorPalette.length > 0 && (
        <div className="mt-4">
          <h3>Color Palette:</h3>
          <div className="flex">
            {colorPalette.map((color, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
                  width: "50px",
                  height: "50px",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
