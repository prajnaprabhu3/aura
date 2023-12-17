import Image from "next/image";
import Color from "./color";

const DisplayImage = ({ uploadedImage, colorPalette }) => {
  const toHex = (rgb) => {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) hex = "0" + hex;

    return hex;
  };

  return (
    <div className="flex flex-col items-center justify-center my-20">
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
          <div>Please upload an image!</div>
        )}
      </div>

      {/* palette  */}
      {colorPalette && (
        <ul className="flex flex-wrap gap-12 md:gap-14 justify-center my-32">
          {colorPalette.map((color) => {
            const rgb = `rgb(${color.join(",")})`;
            // console.log(rgb)
            // console.log("#" + toHex(color[0]) + toHex(color[1]) + toHex(color[2]));
            const hex = `"#${toHex(color[0])}${toHex(color[1])}${toHex(
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
