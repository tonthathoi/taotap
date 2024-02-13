"use client"

import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

import { Button } from "@/components";
import { useToggle } from "@/hooks";
import { EyeIcon, EyeOffIcon } from "@/assets/icons";

const PreviewOnMobile = () => {
  const { on, toggle } = useToggle();

  return (
    <Fragment>
      <Button
        title={on ? "Ẩn Đi" : "Xem Trước"}
        iconStart={on ? EyeOffIcon : EyeIcon}
        containerClassName="fixed bottom-5 z-[101] left-1/2 -translate-x-1/2 btn py-4 text-sm rounded-md text-white hidden max-lg:flex"
        onClick={toggle}
      />
      <section
        className={twMerge(
          "fixed inset-0 z-[100] -translate-y-full opacity-0 bg-[var(--layout-bg)] transition-base pt-20",
          on && "translate-y-0 opacity-100"
        )}
      >
        <div className="mx-auto text-3xl font-bold text-white rounded-full shadow-2xl w-28 h-28 bg-[var(--purple-primary)] flex-center">
          H
        </div>
        <span className="block mx-auto mt-5 font-sans text-xl font-bold text-white w-fit">
          Tôn Thất Hội
        </span>
      </section>
    </Fragment>
  );
};

export default PreviewOnMobile;
