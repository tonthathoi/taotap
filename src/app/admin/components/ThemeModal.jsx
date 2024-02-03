"use client"

import { useTheme } from "@/contexts/Theme";
import { HeadLine, Modal, Theme } from "@/components";
import { DARKTHEMES, LIGHTTHEMES } from "@/utils/constants";

const ThemeModal = () => {
  const { handleChangeTheme } = useTheme();
  return (
    <Modal type="modal" heading="Giao Diện" modalBoxClassName="no-scrollbar">
      <HeadLine
        title="Màu Tối"
        component="h3"
        containerClassName="text-[18px] mb-[10px]"
      />

      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-[14px]">
        {DARKTHEMES.map((item, idx) => (
          <Theme
            key={idx}
            src={item.image}
            title={item.title}
            onPreview={() => handleChangeTheme(item.name)}
          />
        ))}
      </div>

      <HeadLine
        title="Màu Sáng"
        component="h3"
        containerClassName="text-[18px] mb-[10px] mt-3"
      />

      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-[14px]">
        {LIGHTTHEMES.map((item, idx) => (
          <Theme
            key={idx}
            src={item.image}
            title={item.title}
            onPreview={() => handleChangeTheme(item.name)}
          />
        ))}
      </div>
    </Modal>
  );
};

export default ThemeModal;
