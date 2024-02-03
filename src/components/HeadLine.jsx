import { memo } from "react";
import { twMerge } from "tailwind-merge";

const HeadLine = ({
  containerClassName,
  title,
  component: Component = "h1",
  ...restProps
}) => {
  return (
    <Component
      className={twMerge("text-2xl font-medium text-[var(--text-color)]", containerClassName)}
      {...restProps}
    >
      {title}
    </Component>
  );
};

export default memo(HeadLine);
