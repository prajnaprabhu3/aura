"use client";
import { UploadContext } from "@/context/useUploadData";
// import Image from "next/image";
import { useContext } from "react";

export default function UploadedImage() {
  const { upload } = useContext(UploadContext);
  return (
    <div className="p-[8px] bg-white dark:bg-[#252525] rounded-xl drop-shadow-md w-fit h-fit">
      {/* <Image
        width={650}
        height={300}
        src={upload!}
        alt="image"
        objectFit="cover"
        className="rounded-xl h-[500px] w-fit"
      /> */}
      <img
        alt="image"
        src={upload!}
        className="h-[500px] w-fit object-contain rounded-xl"
      />
    </div>
  );
}
