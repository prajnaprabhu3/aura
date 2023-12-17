"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunDim, Moon } from "lucide-react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="mt-2">
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        {theme === "dark" ? (
          <SunDim size={18} strokeWidth={2} />
        ) : (
          <Moon size={14} strokeWidth={2} />
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
