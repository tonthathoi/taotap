import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

import { Button } from "@/components";

const Modal = ({
  children,
  heading,
  headingClassName,
  modalBoxClassName,
  btnCancelClassName,
  onClick,
  contentClassName,
  type,
}) => {
  return (
    <Fragment>
      <input type="checkbox" id={type} className="modal-toggle" />
      <div className="modal" onClick={onClick} role="dialog">
        <div
          className={twMerge(
            "max-w-[900px] bg-white text-black modal-box rounded-md",
            modalBoxClassName
          )}
        >
          <h3
            className={twMerge(
              "mb-5 text-2xl font-bold text-[var(--text-color)]",
              headingClassName
            )}
          >
            {heading}
          </h3>

          <div className={contentClassName}>{children}</div>

          <div className="modal-action">
            <label
              htmlFor={type}
              className={twMerge(
                "hover:opacity-80 transition-base cursor-pointer text-black mt-5",
                btnCancelClassName
              )}
            >
              <Button component="div" title="Đóng" containerClassName="btn text-white rounded-md" />
            </label>
          </div>
        </div>

        <label className="modal-backdrop" htmlFor={type} />
      </div>
    </Fragment>
  );
};
export default Modal;
