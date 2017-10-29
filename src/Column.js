import React from 'react';
import Item from './Item';
import Droppable from './Droppable';

class Column extends React.Component {

    setDraggingItem = (item) => {
        this.props.setDraggingItem(item);
    }

    renderItems = (items) => {
        return items.map(i => {
            return <Item key={i.id} name={i.id} {...i} setDraggingItem={this.setDraggingItem} />
        });
    }

    render() {
        const { connectDropTarget } = this.props;
        return connectDropTarget(
            <div className={"column " + this.props.klas}>
                {this.renderItems(this.props.items)}
            </div>
        );
    }
}

const listTarget = {
    drop: function (props, monitor) {
        console.log(monitor.getItem());
        props.setDroppedColName(props.name);
    },

}

export default Droppable(Column, listTarget, "Item");

