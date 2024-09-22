import React, { useCallback } from "react";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  closestCorners,
  DndContext,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { debounce } from "lodash";
import Bento from "./Bento";
import CustomMouseSensor from "./CustomMouseSensor";
import { ALL } from "../constants";

const DraggableBentoGrid = ({ cards, setCards, category }) => {
  const getCardIndex = (id) => {
    return cards.findIndex((card) => card.id === id);
  };

  const handleDragOver = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }

    setCards((prev) => {
      const activeIndex = getCardIndex(active.id);
      const overIndex = getCardIndex(over.id);

      return arrayMove(prev, activeIndex, overIndex);
    });
  };

  const debouncedDragOver = useCallback(
    debounce(handleDragOver, 40, {
      trailing: false,
      leading: true,
    }),
    []
  );

  const sensors = useSensors(
    useSensor(CustomMouseSensor),
    useSensor(TouchSensor, {
      activationConstraint: { delay: 300, tolerance: 5 },
    })
  );

  return (
    <div
      className="animate-rise bento-container pb-5 grid gap-4 transition-all duration-500 
                grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
    >
      <DndContext
        collisionDetection={closestCorners}
        onDragOver={debouncedDragOver}
        sensors={sensors}
      >
        <SortableContext items={cards} strategy={verticalListSortingStrategy}>
          {cards.map((card) => (
            <Bento
              type={card.type}
              id={card.id}
              key={card.id}
              opacity={category === ALL || category === card.category}
            >
              {card.content}
            </Bento>
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default DraggableBentoGrid;
