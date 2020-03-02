import React, { useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

function ListItem({ id, children, index, moveItem, removeItem }) {
  const ref = useRef(null);
  const [, drop] = useDrop({
    accept: 'CARD',
    drop(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = !ref.current.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveItem(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type: 'CARD', id, index },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    }),
    end: (item, monitor) => {
        const { tab } = monitor.getDropResult() || {};
        if(tab && monitor.didDrop()) {
            removeItem(item.id, tab.name);
        }

    },
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <ul ref={ref} className='content-list' style={{ opacity }}>
      {children}
    </ul>
  );
}

export default ListItem;
