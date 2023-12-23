"use client";

import { useState } from "react";
import { Clipboard, CheckCircle2 } from "lucide-react";

const Color = ({ rgb, hex }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 3000);
    } catch (err) {
      console.log("Unable to copy hexcode", err);
    }
  };

  return (
    <li className="bg-gray-100 dark:bg-zinc-800 border border-gray-200 dark:border-gray-900 p-1.5 md:p-2 rounded-lg relative hover:cursor-pointer hover:-translate-y-1 transition-all">
      <div
        style={{ background: rgb }}
        className={`bg-${rgb} h-32 w-24 md:h-40 md:w-32 rounded-lg`}
      >
        <span className="absolute px-1 py-1.5 right-2 bottom-2 md:right-4 md:bottom-4 rounded">
          {copied ? (
            <CheckCircle2 size={16} className="text-gray-100" />
          ) : (
            <Clipboard
              size={16}
              className=" text-zinc-100"
              onClick={handleCopy}
            />
          )}
        </span>
      </div>
    </li>
  );
};

export default Color;

// bg-[#f5f5f5] dark:bg-gray-300
