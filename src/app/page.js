"use client";

import { useState } from "react";
import ColorThief from "colorthief";
import DisplayImage from "@/components/displayImage";
import Header from "@/components/header";

export default function Home() {
  const [upload, setUpload] = useState(null);
  const [colorPalette, setColorPalette] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const img = new Image();

      img.onload = () => {
        const colorThief = new ColorThief();
        const colorPalette = colorThief.getPalette(img, 7);
        console.log(colorPalette);
        setUpload(event.target.result);
        setColorPalette(colorPalette);
      };
      img.src = event.target.result;
    };

    console.log("reader", reader);
    reader.readAsDataURL(file);
  };

  return (
    <main className="h-screen">
      <Header handleChange={handleUpload} />
      <DisplayImage uploadedImage={upload} colorPalette={colorPalette} />
    </main>
  );
}
