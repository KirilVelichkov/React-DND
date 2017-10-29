import React from 'react';
import { DragSource } from 'react-dnd';

export default function (ComposedComponent, itemSource, type) {
    class Droppable extends React.Component {
        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    function collect(connect, monitor) {
        return {
            connectDragSource: connect.dragSource(),
            isDragging: monitor.isDragging
        }
    }

    return DragSource(type, itemSource, collect)(Droppable);
}
