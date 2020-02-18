import React, { Component } from 'react';
import {Rect} from 'react-konva';

class Card extends Component {
    state = {
        isDragging: false,
        x: 300,
        y: 80
      };

    render() {
        return (
            <Rect
                x={this.state.x}
                y={this.state.y}
                draggable
                width={100}
                height={100}
                fill="red"
                shadowBlur={10}
                onDragStart={() => {
                    this.setState({
                    isDragging: true
                    });
                }}
                onDragEnd={e => {
                    this.setState({
                    isDragging: false,
                    x: e.target.x(),
                    y: e.target.y()
                    });
                }}
            />
        );
    }
}

export default Card;