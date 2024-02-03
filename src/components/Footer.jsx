import { memo } from "react";

const Footer = () => {
  return (
    <footer className="mt-10 wide">
      <div className="footer max-lg:gap-5 max-md:justify-center items-center py-5 text-neutral-content mt-10 border-t-[1px] border-t-[#272727]">
        <aside className="items-center grid-flow-col">
          <p className="text-black max-lg:text-xs">Copyright © 2023. All Rights Reserved By <strong className="text-primary">Taotap</strong></p>
        </aside>
      </div>
    </footer>
  );
};

export default memo(Footer);
