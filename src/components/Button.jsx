import { twMerge } from "tailwind-merge";

const Button = ({
  iconStart: IconStart,
  iconEnd: IconEnd,
  title,
  containerClassName,
  iconStartClassName,
  iconEndClassName,
  titleClassName,
  ...restProps
}) => {
  return (
    <button
      className={twMerge(
        "flex gap-1 items-center py-2.5 px-5 rounded-[999px] text-[15px] cursor-pointer hover:opacity-80 transition-base",
        containerClassName
      )}
      {...restProps}
    >
      {IconStart && <IconStart className={iconStartClassName} />}
      <span className={titleClassName}>{title}</span>
      {IconEnd && <IconEnd className={iconEndClassName} />}
    </button>
  );
};

export default Button;
