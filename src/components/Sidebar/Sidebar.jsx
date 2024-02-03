"use client";

import { Fragment } from "react";

import { useToggle } from "@/hooks";
import { Button } from "@/components";
import { MenuIcon } from "@/assets/icons";
import { twMerge } from "tailwind-merge";

const Sidebar = () => {
  const { on, toggle, toggleOff } = useToggle();

  return (
    <Fragment>
      <div
        className="fixed hidden top-0 right-0 z-50 max-lg:flex flex-center translate-x-1/2 -translate-y-1/2 bg-[var(--purple-primary)] rounded-full w-28 h-28 cursor-pointer hover:opacity-80 transition-base"
        onClick={toggle}
      >
        <MenuIcon className="relative w-8 h-8 text-white right-5 top-5" />
      </div>

      <div
        className={twMerge(
          "fixed inset-0 z-[40] opacity-0 pointer-events-none bg-[rgba(0,0,0,.8)] transition-base",
          on && "opacity-100 pointer-events-auto"
        )}
        onClick={toggleOff}
      />

      <div
        className={twMerge(
          "fixed top-0 right-0 bottom-0 z-40 flex flex-col w-[320px] shadow-2xl p-4 bg-[var(--layout-bg)] max-lg:translate-x-full transition-base",
          on && "max-lg:translate-x-0"
        )}
      >
        {/* <Button title="Đăng nhập" containerClassName="absolute text-white -translate-y-1/2 top-1/2 left-0 bg-[var(--purple-primary)] font-bold text-sm w-full justify-center py-3" /> */}
        <div className="flex-between border-b-[1px] border-dashed border-gray-600 pb-5 max-lg:pt-8 pointer-events-none">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-[var(--purple-primary)] flex-center font-bold text-white">
              H
            </div>
            <div>
              <h1 className="text-sm text-[var(--text-color)] max-md:font-semibold">
                Hội
              </h1>
              <h2 className="text-sm text-gray-400 max-md:font-medium">
                Tôn Thất Hội
              </h2>
            </div>
          </div>

          <button className="text-xs py-1.5 px-3 rounded-md bg-[var(--purple-primary)] font-medium hover:opacity-80 transition-base text-white">
            Đăng xuất
          </button>
        </div>

        <div className="flex flex-col flex-1 max-h-screen gap-2 mt-5 overflow-y-auto no-scrollbar">
          <div className="text-[var(--text-color)] divider after:bg-[var(--purple-primary)] before:bg-[var(--purple-primary)] text-sm">
            MẠNG XÃ HỘI
          </div>
          <Button
            title="Link Zalo"
            titleClassName="text-sm text-white max-md:text-xs max-md:font-semibold"
            containerClassName="bg-[var(--purple-primary)] justify-center mb-2"
          />
          <Button
            title="Link Tiktok"
            titleClassName="text-sm text-white max-md:text-xs max-md:font-semibold"
            containerClassName="bg-[var(--purple-primary)] justify-center mb-2"
          />
          <Button
            title="Link Facebook"
            titleClassName="text-sm text-white max-md:text-xs max-md:font-semibold"
            containerClassName="bg-[var(--purple-primary)] justify-center mb-2"
          />
          <Button
            title="Link Youtube"
            titleClassName="text-sm text-white max-md:text-xs max-md:font-semibold"
            containerClassName="bg-[var(--purple-primary)] justify-center mb-2"
          />
          <Button
            title="Link Twitter"
            titleClassName="text-sm text-white max-md:text-xs max-md:font-semibold"
            containerClassName="bg-[var(--purple-primary)] justify-center mb-2"
          />

          <div className="text-[var(--text-color)] divider after:bg-[var(--purple-primary)] before:bg-[var(--purple-primary)] text-sm">
            LIÊN HỆ
          </div>
          <Button
            title="Số Điện Thoại"
            titleClassName="text-sm text-white max-md:text-xs max-md:font-semibold"
            containerClassName="bg-[var(--purple-primary)] justify-center mb-2"
          />
          <Button
            title="Thông tin ngân hàng"
            titleClassName="text-sm text-white max-md:text-xs max-md:font-semibold"
            containerClassName="bg-[var(--purple-primary)] justify-center mb-2"
          />

          <div className="text-[var(--text-color)] divider after:bg-[var(--purple-primary)] before:bg-[var(--purple-primary)] text-sm">
            KHÁC
          </div>
          <Button
            title="Tiêu Đề"
            titleClassName="text-sm text-white max-md:text-xs max-md:font-semibold"
            containerClassName="bg-[var(--purple-primary)] justify-center mb-2"
          />
          <Button
            title="Website"
            titleClassName="text-sm text-white max-md:text-xs max-md:font-semibold"
            containerClassName="bg-[var(--purple-primary)] justify-center mb-2"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
