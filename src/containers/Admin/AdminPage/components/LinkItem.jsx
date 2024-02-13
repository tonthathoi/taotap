import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

import { Button } from "@/components";
import { AppOutlineIcon, EditIcon, TrashIcon } from "@/assets/icons";

const LinkItem = ({ name, title, id, desc }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const dndKitRowStyles = {
    // touchAction: "none",
    transform: CSS.Translate.toString(transform),
    transition,
  };

  return (
    <section
      className="mb-5 overflow-hidden shadow-xl select-none rounded-3xl"
      style={dndKitRowStyles}
    >
      <div className="flex gap-10 py-6 pr-6 overflow-hidden bg-white">
        <div
          className="h-auto pl-6 cursor-pointer flex-center"
          ref={setNodeRef}
          {...attributes}
          {...listeners}
        >
          <AppOutlineIcon />
        </div>

        <div className="w-full">
          <div className="flex items-center gap-2 mb-1 cursor-pointer hover:text-primary transition-base w-fit">
            <span className="block text-sm font-bold">{name}</span>
            <EditIcon />
          </div>
          <div className="flex items-center gap-2 mb-1 break-all cursor-pointer hover:text-primary transition-base w-fit">
            <span className="text-sm font-medium">{title}</span>
            <EditIcon className="max-xs:ml-auto" />
          </div>
          <div className="flex items-center gap-2 mb-1 cursor-pointer max-xs:flex-wrap hover:text-primary transition-base w-fit">
            <span className="text-sm text-gray-500">{desc}</span>
          </div>

          <Button
            title="Xóa"
            iconStart={TrashIcon}
            containerClassName="ml-auto btn rounded-md text-white mt-3"
          />
        </div>
      </div>
    </section>
  );
};

export default LinkItem;
