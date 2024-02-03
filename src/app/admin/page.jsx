import Profile from "../admin/components/Profile";
import ThemeModal from "../admin/components/ThemeModal";
import BrushIcon from "@/assets/icons/BrushIcon";

export default function Page() {
  return (
    <div className="wide-preview">
      <div className="fixed bottom-0 left-0 right-0 z-[1] h-[70px] bg-transparent flex-center backdrop-blur">
        <label htmlFor="modal" className="wide-preview">
          <div className="flex-center gap-2 w-full max-w-[200px] border-[1px] border-solid border-[var(--purple-primary)] rounded-[999px] py-3 mx-auto text-center text-xs shadow-2xl hover:opacity-80 transition-base cursor-pointer text-[var(--text-color)]">
            <BrushIcon />
            Thay Đổi Giao Diện
          </div>
        </label>
      </div>

      <Profile />

      <ThemeModal />
    </div>
  );
}
