import { twMerge } from "tailwind-merge";
import { useController } from "react-hook-form";

import AlertIcon from "@/assets/icons/AlertIcon";

const Form = (props) => {
  const {
    name,
    label,
    control,
    inputClassName,
    inputType,
    placeholder,
    labelClassName,
    containerClassName,
    icon,
  } = props;

  const {
    field: { value, onChange, ...restProps },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  return (
    <div className={twMerge("w-full", containerClassName)}>
      <label
        htmlFor={name}
        className={twMerge("font-medium w-fit mb-2 block", labelClassName)}
      >
        {label}
      </label>

      <div className="relative">
        <div className="absolute -translate-y-1/2 left-2 top-1/2 after:content-[''] after:-right-2.5 after:top-1/2 after:-translate-y-1/2 after:absolute after:w-[1px] after:h-full after:bg-gray-300">
          {icon}
        </div>
        
        <input
          id={name}
          value={value}
          autoComplete="off"
          type={inputType ?? "text"}
          placeholder={placeholder}
          onChange={onChange}
          className={twMerge(
            "bg-transparent rounded input focus:border-primary focus:outline-none w-full text-black",
            error?.message ? "border-red-900" : "border-primary",
            icon ? " pl-12" : "",
            inputClassName
          )}
          {...restProps}
        />

        <AlertIcon
          className={twMerge(
            "absolute -translate-y-1/2 right-4 top-1/2 text-error",
            error?.message ? "block" : "hidden"
          )}
        />
      </div>

      <span
        className={`text-xs font-light text-error mt-2 ${
          error?.message ? "block" : "hidden"
        }`}
      >
        {error?.message}
      </span>
    </div>
  );
};

export default Form;
