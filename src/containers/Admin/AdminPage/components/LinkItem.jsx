import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";

import { Button } from "@/components";
import { AppOutlineIcon, EditIcon, TrashIcon } from "@/assets/icons";

const LinkItem = ({ data }) => {
  console.log("🚀 ~ LinkItem ~ data:", data);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: data.id,
    data,
  });

  const dndKitRowStyles = {
    // touchAction: "none",
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <section style={dndKitRowStyles} ref={setNodeRef}>
      <div
        className="mb-5 overflow-hidden shadow-xl select-none rounded-3xl"
        {...attributes}
        {...listeners}
      >
        <div className="flex items-center gap-10 p-6 overflow-hidden bg-white">
          <AppOutlineIcon />

          <div className="w-full">
            <div className="flex items-center gap-2 mb-1 cursor-pointer hover:text-primary transition-base w-fit">
              <span className="block text-sm font-bold">{data.name}</span>
              <EditIcon />
            </div>
            <div className="flex items-center gap-2 mb-1 break-all cursor-pointer hover:text-primary transition-base w-fit">
              <span className="text-sm font-medium">{data.title}</span>
              <EditIcon className="max-xs:ml-auto" />
            </div>
            <div className="flex items-center gap-2 mb-1 cursor-pointer max-xs:flex-wrap hover:text-primary transition-base w-fit">
              <span className="text-sm text-gray-500">{data.desc}</span>
            </div>

            <Button
              title="Xóa"
              iconStart={TrashIcon}
              containerClassName="ml-auto btn rounded-md text-white mt-3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LinkItem;
