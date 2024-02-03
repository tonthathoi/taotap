"use client";

import { twMerge } from "tailwind-merge";
import { Fragment, useEffect } from "react";
import { usePathname } from "next/navigation";

import { useToggle } from "@/hooks";
import avatar from "@/assets/images/avatar.png";
import { Button, ImageWithFallback } from "@/components";
import { MenuIcon } from "@/assets/icons";
import { Nav } from "@/components/Header";

const HeaderOnMobile = () => {
  const { on, toggleOff, toggleOn } = useToggle();

  useEffect(() => {
    if(on)
    {
      toggleOff()
    }
  }, [usePathname])

  return (
    <Fragment>
      <div className="bg-primary py-[3px] px-[7px] rounded-md hidden max-md:block btn" onClick={toggleOn}>
        <MenuIcon className="text-white w-7 h-7" />
      </div>
      <div
        onClick={toggleOff}
        className={twMerge(
          "fixed inset-0 z-[99] bg-[rgba(0,0,0,.8)] opacity-0 pointer-events-none transition-base",
          on && "opacity-100 pointer-events-auto"
        )}
      />
      <div
        className={twMerge(
          "fixed top-0 right-0 bottom-0 z-[100] w-full max-w-[300px] bg-white px-5 py-10 translate-x-full opacity-0 transition-base",
          on && "translate-x-0 opacity-100"
        )}
      >
        <div className="pb-5 flex-between border-b-[1px] border-dashed border-primary">
          <div className="flex items-center gap-2">
            <ImageWithFallback
              src={avatar}
              alt="avatar"
              width={45}
              height={45}
              className="object-cover rounded-full"
            />
            <span className="text-xs font-medium">Tôn thất hội</span>
          </div>

          <Button
            title="Đăng xuất"
            containerClassName="bg-primary px-3 rounded-md btn"
            titleClassName="text-xs font-bold text-white"
          />
        </div>

        <Nav containerClassName="mt-5" navListClassName="flex-col items-start" />
      </div>
    </Fragment>
  );
};

export default HeaderOnMobile;
