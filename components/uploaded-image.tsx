"use client";
import { UploadContext } from "@/context/useUploadData";
import Image from "next/image";
import { useContext } from "react";

export default function UploadedImage() {
  const { upload } = useContext(UploadContext);
  return (
    <div className="p-[11px] bg-white dark:bg-[#262626] rounded-xl drop-shadow-md dark:drop-shadow-2xl w-fit h-fit">
      <Image
        width={650}
        height={300}
        src={upload!}
        alt="image"
        objectFit="cover"
        className="md:h-[500px] w-fit object-contain rounded-xl"
      />
    </div>
  );
}
