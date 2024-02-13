import { memo } from "react";

import { Button, ImageWithFallback } from "@/components";

const LinkItem = ({ name, origin_name, icon, src }) => {
  return (
    <div className="gap-5 flex-between">
      <div className="flex items-center gap-4">
        {icon}

        {!icon && (
          <ImageWithFallback src={src} alt="" width={40} height={40} className="flex-shrink-0 object-cover" />
        )}

        <div className="w-full max-w-full">
          <span className="text-sm font-bold">{name}</span>
          <span className="block text-sm text-gray-500">{origin_name}</span>
        </div>
      </div>

      <Button title="Thêm" containerClassName="btn text-white rounded-md" />
    </div>
  );
};

export default memo(LinkItem);
