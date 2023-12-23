import Image from "next/image";
import Color from "./color";

const DisplayImage = ({ uploadedImage, colorPalette }) => {
  const toHex = (rgb) => {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) hex = "0" + hex;

    return hex;
  };

  return (
    <div className="flex flex-col items-center justify-center my-12">
      <div>
        {uploadedImage ? (
          <Image
            src={uploadedImage}
            alt="image"
            height={600}
            width={600}
            className="object-cover  w-80 md:w-[600px] rounded-xl"
          />
        ) : (
          <div className="flex flex-col gap-6 md:gap-10">
            <img
              src="/upload.svg"
              alt=""
              className="h-20 md:h-32 opacity-70 text-gray-800"
            />
            <p className="text-sm md:text-base text-gray-400 text-center">
              Please upload an image!
            </p>
          </div>
        )}
      </div>

      {/* palette  */}
      {colorPalette && (
        <ul className="flex flex-wrap gap-12 md:gap-14 justify-center mt-20">
          {colorPalette.map((color) => {
            const rgb = `rgb(${color.join(",")})`;
            // console.log(rgb)
            // console.log("#" + toHex(color[0]) + toHex(color[1]) + toHex(color[2]));
            const hex = `#${toHex(color[0])}${toHex(color[1])}${toHex(
              color[2]
            )}`;
            return <Color key={color} rgb={rgb} hex={hex} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default DisplayImage;
