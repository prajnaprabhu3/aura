"use client";

import Footer from "@/components/footer";
import ThemeProvider from "@/providers/ThemeProvider";

const Wrapper = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
      {/* <Footer /> */}
    </ThemeProvider>
  );
};

export default Wrapper;
