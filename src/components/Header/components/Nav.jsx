import Link from "next/link";
import { NAV } from "@/components/Header";
import { twMerge } from "tailwind-merge";

const Nav = ({ containerClassName, navItemClassName, navListClassName }) => {
    
  return (
    <nav className={containerClassName}>
      <ul className={twMerge("flex items-center text-sm font-medium", navListClassName)}>
        {NAV.map((item, idx) => (
          <li
            key={idx}
            className={twMerge("cursor-pointer transition-base hover:text-primary max-md:w-full max-md:py-4 md:px-4", navItemClassName )}
          >
            <Link href={item.path} className="block w-full">
              {item.title}
            </Link>
          </li>
        ))}

        <li className="py-[15px] text-center rounded-md cursor-pointer transition-base hover:text-primary px-7 max-md:w-full btn max-md:mt-4 md:ml-4">
          <Link href="" className="font-medium text-white">
            Get Started
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
