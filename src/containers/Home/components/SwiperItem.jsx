import { memo } from "react";

import avatar from "@/assets/images/avatar.png";
import { ImageWithFallback } from "@/components";

const SwiperItem = () => {
  return (
    <div
      className="flex flex-col gap-2 bg-white p-[30px] rounded-[20px] text-center"
      style={{
        boxShadow: "0 0 10px 0 rgba(0,0,0,.1)",
      }}
    >
      <ImageWithFallback
        src={avatar}
        alt="avatar"
        width={80}
        height={80}
        className="flex-shrink-0 object-cover mx-auto rounded-full"
      />
      
      <div className="flex flex-col">
        <span className="font-medium">Tôn thất hội</span>
        <span className="text-sm text-gray-400">@tonhoi</span>
      </div>

      <div className="border-[1px] hover:bg-primary hover:text-white hover:border-none transition-base border-[#111] rounded-[999px] w-fit mx-auto py-1.5 px-10 cursor-pointer text-sm font-medium">
        XEM NGAY
      </div>
    </div>
  );
};

export default memo(SwiperItem);
