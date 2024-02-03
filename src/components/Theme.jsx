"use client";

import { useMeasure } from "react-use";

import { ImageWithFallback } from "@/components";
import CheckMarkIcon from "@/assets/icons/CheckMarkIcon";

const Theme = ({ src, title, onPreview }) => {
  const [ref, { width, height }] = useMeasure();

  return (
    <div className="mb-2">
      <figure
        ref={ref}
        className="relative w-full rounded-[5px] overflow-hidden group"
      >
        <ImageWithFallback
          src={src}
          alt="theme"
          width={width}
          height={height}
          className="object-cover group-hover:scale-105 transition-base"
        />
        <div className="absolute inset-0 z-50 bg-[rgba(0,0,0,0.5)] flex-center opacity-0 group-hover:opacity-100 transition-base">
          <div className="flex flex-col gap-[10px] w-full">
            <button onClick={onPreview} className="text-[8px] font-medium py-[5px] rounded-[999px] bg-[#0000004D] w-full max-w-[100px] mx-auto border-[1px] border-[hsla(0,0%,100%,.5)] hover:opacity-80 transition-base">
              Xem Trước
            </button>
          </div>
        </div>

        {/* <div className="absolute z-40 p-1 bg-[#337a99] rounded-full right-2 bottom-2">
            <CheckMarkIcon className="w-[13px] h-[13px] text-white" />
        </div> */}
      </figure>
      <h4 className="text-xs font-medium py-[5px] text-[var(--text-color)]">{title}</h4>
    </div>
  );
};

export default Theme;
