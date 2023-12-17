"use client";

import ThemeProvider from "@/providers/ThemeProvider";

const Wrapper = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Wrapper;
