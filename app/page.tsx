import MainComponent from "@/components/main-component";
import DialogDemo from "@/components/ui/dialog";
import UploadImage from "@/components/upload-image";

export default function Home() {
  return (
    <main className="h-screen justify-center items-center flex flex-col">
      <UploadImage />
      {/* <MainComponent /> */}
      {/* <DialogDemo /> */}
    </main>
  );
}
