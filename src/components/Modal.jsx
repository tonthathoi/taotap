import { Fragment } from "react";
import { twMerge } from "tailwind-merge";

import { CloseIcon } from "@/assets/icons";

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
            "max-w-[900px] bg-[var(--primary-bg)] text-white modal-box rounded-md",
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
                "hover:opacity-80 transition-base absolute top-5 right-5 cursor-pointer text-[var(--text-color)]",
                btnCancelClassName
              )}
            >
              <CloseIcon className="w-10 h-10" />
            </label>
          </div>
        </div>

        <label className="modal-backdrop" htmlFor={type} />
      </div>
    </Fragment>
  );
};
export default Modal;
