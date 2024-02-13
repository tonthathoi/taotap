"use client";

import { Fragment, useEffect, useState } from "react";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  rectSwappingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";

import { Button } from "@/components";
import LinkItem from "./components/LinkItem";
import { AddLinkModal } from "@/containers/Admin";
import { AddIcon, HeadingIcon, BrushIcon } from "@/assets/icons";
import { SOCIAL_MEDIA_LINK } from "./mock";

const Admin = () => {
  const [items, setItems] = useState(SOCIAL_MEDIA_LINK);
  console.log("🚀 ~ Admin ~ items:", items)

  useEffect(() => {

    // dùng post method để lưu items mới sau khi sort ở đây
    setItems(items);
  }, [items]);

  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } });
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 5 } });

  const sensors = useSensors(mouseSensor, touchSensor);
  function handleDragEnd(event) {
    const { active, over } = event;

    if(!over) return;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.findIndex(r => r.id === active.id);
        const newIndex = items.findIndex(r => r.id === over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
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
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={items.filter((item) => item.id)}
          strategy={rectSwappingStrategy}
        >
          {items.map((item, idx) => (
            <LinkItem
              key={idx}
              name={item.name}
              title={item.title}
              id={item.id}
              desc={item.desc}
            />
          ))}
        </SortableContext>
      </DndContext>
    </Fragment>
  );
};

export default Admin;
