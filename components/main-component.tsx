import Palette from "./palette";
import UploadedImage from "./uploaded-image";

export default function MainComponent() {
  return (
    <section className="mx-20">
      <div className="flex gap-x-12 items-center ">
        <UploadedImage />

        <Palette />
      </div>
    </section>
  );
}
