import { Fragment } from "react";

import { PreviewOnMobile } from "@/containers/Admin";

const layout = ({ children }) => {
  return (
    <Fragment>
      <section className="fixed right-0 bottom-0 top-[92px] text-center w-full max-w-[500px] border-l-[1px] border-[#E0E2D9] max-lg:hidden">
        <div className="relative flex-shrink-0 mockup-phone top-14">
          <div className="camera" />
          <div className="display">
            <div className="bg-[var(--layout-bg)] artboard artboard-demo phone-1 text-[var(--text-color)] max-w-[290px]">
              <div>
                <div className="mx-auto text-3xl font-bold text-white rounded-full shadow-2xl w-28 h-28 bg-[var(--purple-primary)] flex-center">
                  H
                </div>
                <span className="block mx-auto mt-5 font-sans text-xl font-bold w-fit">
                  Tôn Thất Hội
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-14 mr-[500px] max-lg:mr-0 px-4">
        <div className="max-w-[640px] mx-auto">{children}</div>
      </div>

      <PreviewOnMobile />
    </Fragment>
  );
};

export default layout;
