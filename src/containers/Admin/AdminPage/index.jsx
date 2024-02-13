"use client";

import { Fragment, useEffect, useState } from "react";
import {
  DndContext,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { Button } from "@/components";
import LinkItem from "./components/LinkItem";
import { AddLinkModal } from "@/containers/Admin";
import { AddIcon, HeadingIcon, BrushIcon } from "@/assets/icons";
import { SOCIAL_MEDIA_LINK } from "./mock";

const Admin = () => {
  const [items, setItems] = useState(SOCIAL_MEDIA_LINK);
  const [activeId, setActiveId] = useState(null);
  const [activeDragItemData, setActiveDragItemData] = useState(null);
  // console.log("🚀 ~ Admin ~ activeDragItemData:", activeDragItemData);

  useEffect(() => {
    // dùng post method để lưu items mới sau khi sort ở đây
    setItems(items);
  }, [items]);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 },
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 5 },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex((r) => r.id === active.id);
        const newIndex = items.findIndex((r) => r.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
    setActiveDragItemData(null);
  }

  function handleDragStart(event) {
    setActiveId(event.active.id);
    setActiveDragItemData(event?.active?.data?.current);
  }

  const customDropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({ styles: { active: { opacity: "0.5" } } }) 
  }

  return (
    <Fragment>
      <AddLinkModal />

      <section>
        <Button
          component="label"
          htmlFor="add_link"
          title="Thêm Liên Kết"
          iconStart={AddIcon}
          iconStartClassName="w-6 h-6"
          containerClassName="btn w-full py-3.5 text-white max-w-[640px] mx-auto max-md:max-w-full"
        />
      </section>

      <section className="mt-10 mb-3 flex-between max-xs:flex-wrap max-xs:gap-3">
        <Button
          title="Thêm tiêu đề"
          iconStart={HeadingIcon}
          containerClassName="border-[1px] border-gray-300 gap-2 hover:bg-primary hover:text-white"
          titleClassName="font-medium text-sm"
        />
        <Button
          title="Thay đổi giao diện"
          iconStart={BrushIcon}
          containerClassName="border-[1px] border-gray-300 gap-2 hover:bg-primary hover:text-white"
          titleClassName="font-medium text-sm"
        />
      </section>

      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {items.map((item) => (
            <LinkItem key={item.id} data={item} />
          ))}
        </SortableContext>
        
        <DragOverlay dropAnimation={customDropAnimation}>
          {activeId ? <LinkItem data={activeDragItemData} /> : null}
        </DragOverlay>
      </DndContext>
    </Fragment>
  );
};

export default Admin;
