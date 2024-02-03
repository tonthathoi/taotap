"use client";

import { Fragment } from "react";
import { toast } from "react-toastify";
import { twMerge } from "tailwind-merge";

import { useToggle } from "@/hooks";
import { useTheme } from "@/contexts/Theme";
import { ChevronUpIcon } from "@/assets/icons";

const Notification = () => {
  const { theme, resetTheme } = useTheme();
  const { on, toggle } = useToggle(true);

  return (
    <Fragment>
      {theme !== "" && (
        <div
          className={twMerge(
            "fixed top-0 w-full -translate-x-1/2 bg-[var(--primary-bg)] shadow-2xl left-1/2 max-w-[320px] rounded-bl-md p-5 text-xs transition-base text-[var(--text-color)]",
            !on && "-translate-y-full"
          )}
        >
          <div className="mb-2">Bạn đang ở chế độ xem thử.</div>
          <div className="mb-2">
            Nhấn{" "}
            <button className="px-3 py-1 text-xs rounded-sm text-white bg-[var(--purple-primary)] hover:opacity-80 transition-base mx-1" onClick={resetTheme}>
              Vào đây
            </button>{" "}
            để thoát chế độ xem thử.
          </div>
          <div>
            Nhấn{" "}
            <button className="px-3 py-1 text-xs rounded-sm text-white bg-[var(--purple-primary)] hover:opacity-80 transition-base mx-1" onClick={() => {toast.warn("Tính năng đang cập nhật")}}>
              Vào đây
            </button>{" "}
            để xác nhận thay đổi.
          </div>

          <div
            className={twMerge("absolute right-0 px-1 pt-0 py-2 translate-y-1/2 bg-[var(--primary-bg)] -bottom-[7px] rounded-br-sm rounded-bl-sm cursor-pointer", !on && "max-sm:right-1/2 max-sm:translate-x-1/2")}
            onClick={toggle}
          >
            <ChevronUpIcon
              className={twMerge("relative top-1.5", !on && "rotate-180")}
            />
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Notification;
