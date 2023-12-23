import { Inter } from "next/font/google";
import Wrapper from "./wrapper";

import "./globals.css";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aura",
  description: "Get colors in your image",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Wrapper>
        <body className={`${inter.className} dark:bg-[#141417]`}>
          {children}
          {/* <Footer /> */}
        </body>
      </Wrapper>
    </html>
  );
}
