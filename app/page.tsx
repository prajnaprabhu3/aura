"use client";

import MainComponent from "@/components/main-component";
import UploadImage from "@/components/upload-image";
import { UploadContext } from "@/context/useUploadData";
import { useContext } from "react";

export default function Home() {
  const { upload } = useContext(UploadContext);
  return (
    <main className="h-screen justify-center items-center flex flex-col">
      {upload ? <MainComponent /> : <UploadImage />}
    </main>
  );
}
