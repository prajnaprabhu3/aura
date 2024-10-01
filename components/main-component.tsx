import Palette from "./palette";
import UploadedImage from "./uploaded-image";

export default function MainComponent() {
  return (
    <section className="mx-20">
      <div className="flex flex-col md:flex-row gap-y-12 md:gap-x-12 md:items-center ">
        <UploadedImage />

        <Palette />
      </div>
    </section>
  );
}
