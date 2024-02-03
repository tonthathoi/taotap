"use client";

import { usePathname } from "next/navigation";
import { HeaderOnMobile, Nav } from "@/components/Header";
import { Fragment } from "react";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="py-1.5 relative z-[99]">
      <div className="wide-preview max-w-[1200px]">
        <div className="py-[18px] text-black max-md:py-[23px] flex-between">
          <div>LOGO</div>

          {pathname.includes("login") || pathname.includes("signup") || pathname.includes("reset_password") ? (
            <></>
          ) : (
            <Fragment>
              <Nav containerClassName="max-md:hidden" />
              <HeaderOnMobile />
            </Fragment>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
