import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function DraggableSection({ items, onReorder, children }) {
  return (
    <DragDropContext onDragEnd={onReorder}>
      <Droppable droppableId="resume-sections">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {children}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default DraggableSection;
