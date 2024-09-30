"use client";

import { ReactNode, useState } from "react";
import ThemeProvider from "./theme-provider";
import { UploadContext } from "@/context/useUploadData";

export default function Provider({ children }: { children: ReactNode }) {
  const [upload, setUpload] = useState<string | null>(null);
  const [colorPalette, setColorPalette] = useState<number[][] | undefined>([]);

  return (
    <UploadContext.Provider
      value={{ upload, setUpload, colorPalette, setColorPalette }}
    >
      <ThemeProvider>{children}</ThemeProvider>
    </UploadContext.Provider>
  );
}
