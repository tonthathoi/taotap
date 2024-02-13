import { HeadLine } from "@/components";
import { ThemeItem } from "@/containers/Admin";

const Theme = () => {
  return (
    <div className="px-5">
      <HeadLine
        title="Giao diện"
        containerClassName="text-black font-semibold mb-1"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 p-6 bg-white shadow-2xl rounded-3xl max-w-[640px] mx-auto mb-10">
        {/* dark theme */}
        <ThemeItem containerClassName="bg-[#1e1e1e]" title="tối" />
        <ThemeItem containerClassName="bg-[#170f23]" title="Tím" />
        <ThemeItem containerClassName="bg-[#0f1a2e]" title="Xanh Đậm" />
        <ThemeItem containerClassName="bg-[#162a45]" title="Xanh Biển" />
        <ThemeItem containerClassName="bg-[#142922]" title="Xanh Lá" />
        <ThemeItem containerClassName="bg-[#251b18]" title="Nâu" />
        <ThemeItem containerClassName="bg-[#411636]" title="Hồng" />
        <ThemeItem containerClassName="bg-[#2e0f10]" title="Đỏ" />

        {/* light theme */}
        <ThemeItem
          containerClassName="bg-white"
          contentClassName="border-black"
          title="Sáng"
        />
        <ThemeItem
          containerClassName="bg-[#e5e3df]"
          contentClassName="border-black"
          title="Xám"
        />
        <ThemeItem
          containerClassName="bg-[#ced9d9]"
          contentClassName="border-black"
          title="Xanh Nhạt"
        />
        <ThemeItem
          containerClassName="bg-[#f9dbdb]"
          contentClassName="border-black"
          title="Hồng Cánh Sen"
        />
      </div>
    </div>
  );
};

export default Theme;
