import { Fragment, memo } from "react";
import { TypeAnimation } from "react-type-animation";

import { Button } from "@/components";
import { SEQUENCE } from "@/containers/Home";

// image
import lnk from "@/assets/images/header-lnk.webp";

const Heading = () => {
  return (
    <Fragment>
      <div className="max-w-[870px] mx-auto text-center">
        <h1 className="font-mono text-7xl max-md:text-[28px] leading-[1.2]">
          Thiết kế không giới hạn
        </h1>
        <span className="block my-6 font-mono text-xl max-md:text-base">
          Lấy cảm hứng từ tác phẩm của hàng triệu nhà thiết kế và đại lý được
          xếp hạng hàng đầu trên khắp thế giới.
        </span>
      </div>

      <div className="rounded-[999px] pl-5 pr-2.5 py-3 border-[1px] border-solid border-[#111] mx-auto flex items-center w-fit">
        <div
          className="flex-shrink-0 w-6 h-6 bg-center bg-no-repeat bg-cover max-sm:w-4 max-sm:h-4"
          style={{
            backgroundImage: `url(${lnk.src})`,
          }}
        />
        <span className="ml-2 mr-0.5 text-base max-sm:text-xs">
          taotap.com/
        </span>

        <TypeAnimation
          sequence={SEQUENCE}
          speed={50}
          className="text-base text-[#999999] max-sm:text-xs"
          repeat={Infinity}
        />

        <Button
          title="Get started"
          containerClassName="btn py-5 px-10 max-sm:px-3 max-sm:py-2.5 max-sm:text-[10px] text-white rounded-[999px] max-sm:ml-2 ml-20"
        />
      </div>
    </Fragment>
  );
};

export default memo(Heading);
