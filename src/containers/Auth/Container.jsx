import Link from "next/link";
import { usePathname } from "next/navigation"
import { twMerge } from "tailwind-merge";

const Container = ({ heading, children }) => {
  const pathname = usePathname()

  return (
    <div className="wide">
      <div className="h-[calc(100vh-72px)] max-sm:h-[calc(100vh-82px)] flex-center">
        <div className="w-full p-8 m-4 rounded shadow-lg max-md:m-0 md:max-w-sm md:mx-auto">
          <span className="block w-full mb-4 text-xl font-bold text-center uppercase text-primary">
            {heading}
          </span>

          <div className="mb-4">{children}</div>

          <div className={twMerge("text-sm mb-[2px] max-sm:text-xs", pathname.includes("reset_password") && "hidden")}>
            Bạn quên mật khẩu?{" "}
            <Link
              href="/reset_password"
              className="text-blue-700 hover:underline transition-base hover:text-blue-600"
            >
              Nhấn vào dây
            </Link>
          </div>

          <div className="text-sm max-sm:text-xs">
            Bạn {pathname?.includes("login") ? "chưa": "đã có"} có tài khoản?{" "}
            <Link
              href={pathname?.includes("login") ? "/signup": "/login"}
              className="text-blue-700 hover:underline transition-base hover:text-blue-600"
            >
              Nhấn vào dây
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
