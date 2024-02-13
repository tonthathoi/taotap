import { twMerge } from "tailwind-merge";

const ThemeItem = ({ containerClassName, contentClassName, title }) => {
  return (
    <div>
        <div className={twMerge("rounded-md h-[200px] px-3 flex-center flex-col gap-2 shadow-md cursor-pointer hover:opacity-80 transition-base", containerClassName)}>
            <div className={twMerge("w-full py-2 rounded-3xl border-[1px] border-solid border-white", contentClassName)}></div>
            <div className={twMerge("w-full py-2 rounded-3xl border-[1px] border-solid border-white", contentClassName)}></div>
            <div className={twMerge("w-full py-2 rounded-3xl border-[1px] border-solid border-white", contentClassName)}></div>
        </div>
        
        <span className="block mt-2 text-sm font-medium text-center">{title}</span>
    </div>
  );
};

export default ThemeItem;
