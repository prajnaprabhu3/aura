export function getRequiredFormatValue(
  format: string,
  color: number[]
): string {
  if (!color || color.length !== 3) {
    return "Invalid color";
  }

  const [r, g, b] = color;

  switch (format) {
    case "SVG":
      return `<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <rect width="20" height="20" fill="rgb(${r},${g},${b})" />
        </svg>`;

    case "RGB":
      return `rgb(${r}, ${g}, ${b})`;

    case "HEX":
      return `#${r.toString(16).padStart(2, "0")}${g
        .toString(16)
        .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;

    case "HSL":
      const [h, s, l] = rgbToHsl(r, g, b);
      return `hsl(${h}, ${s}%, ${l}%)`;

    default:
      return "Unsupported format";
  }
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}
