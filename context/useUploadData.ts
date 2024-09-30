import { Dispatch, SetStateAction, createContext } from "react";

interface UploadContextType {
  upload: string | null;
  setUpload: Dispatch<SetStateAction<string | null>>;
  colorPalette: number[][] | undefined;
  setColorPalette: Dispatch<SetStateAction<number[][] | undefined>>;
}

export const UploadContext = createContext<UploadContextType>({
  upload: null,
  setUpload: () => {},
  colorPalette: undefined,
  setColorPalette: () => {},
});
