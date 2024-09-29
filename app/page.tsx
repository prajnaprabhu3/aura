import { ThemeSwitcher } from "@/components/theme-switcher";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <div>
      Hi
      <p className={`${caveat.className}`}>Drag and Drop your Image</p>
      <ThemeSwitcher />
    </div>
  );
}
