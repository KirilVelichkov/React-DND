import React from 'react';
import Column from './Column';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items1: [
                { status: "items1", id: 1 },
                { status: "items1", id: 2 },
                { status: "items1", id: 3 },
                { status: "items1", id: 4 }
            ],
            items2: [
                { status: "items2", id: 5 },
                { status: "items2", id: 6 },
                { status: "items2", id: 7 },
                { status: "items2", id: 8 }
            ],
            draggingItem: false,
            droppedColName: false
        }
    }

    updateState = () => {
        let { draggingItem, droppedColName } = this.state;

        if (!draggingItem || !droppedColName) {
            return;
        }

        if (draggingItem.status === droppedColName) {
            return;
        }

        let colToRemove = this.state[draggingItem.status];
        let colToAdd = this.state[droppedColName];

        colToRemove = colToRemove.filter(i => i.id !== draggingItem.id);
        draggingItem.status = droppedColName;
        colToAdd.unshift(draggingItem);

        if (droppedColName === "items1") {
            this.setState({
                items1: colToAdd,
                items2: colToRemove
            });
        }

        if (droppedColName === "items2") {
            this.setState({
                items2: colToAdd,
                items1: colToRemove
            });
        }
    }

    setDraggingItem = (draggingItem) => {
        this.setState({ draggingItem });
    }

    setDroppedColName = (droppedColName) => {
        this.setState({ droppedColName });
        this.updateState();
    }

    render() {
        const items1 = this.state.items1;
        const items2 = this.state.items2;

        return (
            <div className="board grid">
                <Column klas="col1" name="items1" items={items1} setDroppedColName={this.setDroppedColName} setDraggingItem={this.setDraggingItem} updateState={this.updateState} />
                <Column klas="col2" name="items2" items={items2} setDroppedColName={this.setDroppedColName} setDraggingItem={this.setDraggingItem} updateState={this.updateState} />
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(Board);