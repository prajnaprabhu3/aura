import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <div className="mx-auto py-4">
      <div className="flex gap-x-1.5 w-[230px] mx-auto ">
        <p className="text-zinc-400 dark:text-zinc-600 transition-all duration-200 ease-out">
          Crafted with care by
        </p>

        <a
          href="https://prajnaprabhu.com"
          target="_blank"
          className="flex items-center gap-x-[2px] text-zinc-700 dark:text-gray-200 group transition-all duration-200 ease-out "
        >
          Prajna
          <ArrowUpRight
            size={16}
            className="hidden group-hover:block transition-all duration-200 ease-out"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
