"use client";

import { UploadContext } from "@/context/useUploadData";
import { act, useContext, useState } from "react";
import { Copy, CircleCheck, ArrowDownToLine } from "lucide-react";
import { getRequiredFormatValue } from "@/libs/getRequiredFormatValue";
import UploadDialog from "./dialog";

const variants = ["RGB", "HEX", "HSL"];

export default function Palette() {
  const { colorPalette } = useContext(UploadContext);
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);
  const [activeColor, setActiveColor] = useState<number>(0);

  function getFormatValue(format: string): string {
    if (!colorPalette || !colorPalette[activeColor]) {
      return "No color selected";
    }
    return getRequiredFormatValue(format, colorPalette[activeColor]);
  }

  function handleCopy(value: string, format: string) {
    navigator.clipboard.writeText(value);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 3000);
  }

  console.log(colorPalette, "palette within palette");
  return (
    <div className="w-fit text-zinc-600 bg-white dark:text-gray-200 dark:bg-secondaryDark  h-fit border border-gray-300 dark:border-zinc-700 rounded-xl py-4">
      <div className="px-4">
        <h4 className="mb-2 dark:text-gray-200">Palette</h4>

        {colorPalette && (
          <div className="flex gap-x-2 my-4">
            {colorPalette?.map((color, index) => {
              const rgb = `rgb(${color.join(",")})`;
              return (
                <div
                  key={index}
                  style={{ background: rgb }}
                  className={`h-8 w-8 rounded cursor-pointer ${
                    index === activeColor &&
                    " border-2 border-gray-500 dark:border-white drop-shadow-xl"
                  }`}
                  onClick={() => setActiveColor(index)}
                ></div>
              );
            })}
          </div>
        )}
      </div>

      <hr className="dark:border-zinc-700" />

      <div className="px-4 my-6 flex items-start w-full">
        <div className="mr-2">
          <div
            style={{
              background: `rgb(${colorPalette![activeColor]?.join(",")})`,
            }}
            className="h-9 w-9 rounded dark:border-2  dark:border-white"
          ></div>
        </div>

        <div className="flex flex-col gap-y-3 w-full">
          {variants.map((item, index) => {
            const value = getFormatValue(item);
            return (
              <button
                key={index}
                className="flex justify-between items-center border dark:border-zinc-700 rounded-lg px-2 py-1.5 h-fit w-full"
                onClick={() => handleCopy(value, item)}
              >
                <p className="flex items-center gap-x-2">
                  {copiedFormat === item ? (
                    <CircleCheck
                      size={15}
                      className="font-light text-green-500 dark:text-green-400"
                    />
                  ) : (
                    <Copy
                      size={15}
                      className="font-light text-gray-500 dark:text-gray-200"
                    />
                  )}
                  <p className="text-sm font-semibold">{item}</p>
                </p>
                <p className="text-sm">{value}</p>
              </button>
            );
          })}
        </div>
      </div>

      <hr className="dark:border-zinc-700" />

      <div className="flex justify-between px-4 mt-3.5 dark:text-gray-200 text-sm">
        <button className="flex items-center gap-x-1">
          <ArrowDownToLine size={15} />
          Download
        </button>

        <UploadDialog />
      </div>
    </div>
  );
}
