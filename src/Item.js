import React from 'react';
import Draggable from './Draggable';

class Item extends React.Component {

    render() {
        const { connectDragSource } = this.props;
        return connectDragSource(
            <div className="item">
                {"I AM ITEM " + this.props.name}
            </div>
        );
    }
}

const itemSource = {
    beginDrag: function (props, monitor) {
        const item = {
            status: props.status,
            id: props.id
        }

        props.setDraggingItem(item);
        return { cardId: 1 }
    }
}

export default Draggable(Item, itemSource, "Item");