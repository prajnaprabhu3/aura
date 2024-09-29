import Image from "next/image";
import Palette from "./palette";

export default function MainComponent() {
  return (
    <section className="mx-20">
      <div className="flex gap-x-4 bg-green-200 items-center ">
        {/* image  */}
        <div className="p-2 bg-white dark:bg-[#252525] rounded-xl drop-shadow-md">
          <Image
            width={650}
            height={300}
            src={"/wallpaper.jpeg"}
            alt="image"
            className="rounded-xl"
          />
        </div>

        {/* palette  */}
        <Palette />
      </div>
    </section>
  );
}
