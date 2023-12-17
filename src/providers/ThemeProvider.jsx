"use cleint";

import { useState, useEffect } from "react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

const ThemeProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{children}</>;

  return <NextThemeProvider attribute="class">{children}</NextThemeProvider>;
};

export default ThemeProvider;
