import { Palette, ImagePlus } from "lucide-react";
import ThemeSwitcher from "./theme/ThemeSwitcher";

const Header = ({ handleChange }) => {
  return (
    <header className="py-4">
      <div className="flex justify-around mx-auto md:px-14">
        {/* logo  */}
        <div className="flex items-center gap-2">
          <Palette size={18} />
          <h2 className="text-md md:text-lg">aura</h2>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div>
            <label
              htmlFor="file"
              className="flex items-center gap-1 text-zinc-600 dark:text-gray-400 text-xs font-light bg-gray-100 dark:bg-zinc-800  border border-dashed border-gray-400 dark:border-gray-600 rounded p-2 cursor-pointer"
            >
              <ImagePlus size={12} /> Upload Image
            </label>
            <input type="file" id="file" hidden onChange={handleChange} />
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
