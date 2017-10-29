import React from 'react';
import { DropTarget } from 'react-dnd';

export default function (ComposedComponent, itemSource, type) {
    class Droppable extends React.Component {
        render() {
            return <ComposedComponent {...this.props} />;
        }
    }

    function collect(connect, monitor) {
        return {
            connectDropTarget: connect.dropTarget(),
        }
    }

    return DropTarget(type, itemSource, collect)(Droppable);
}
