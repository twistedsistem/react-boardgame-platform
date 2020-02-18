import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Group, Text, Rect} from 'react-konva';
import Card from './Card';

class App extends Component {
  state = {
    isDragging: false,
    x: 50,
    y: 50
  };

  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Text
            text="Draggable Text"
            x={this.state.x}
            y={this.state.y}
            draggable
            fill={this.state.isDragging ? 'green' : 'black'}
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
          <Card />
          <Group id="Hands">
              <Group id="Global">
                <Rect
                    x={20}
                    y={window.innerHeight * .7}
                    width={window.innerWidth * .95}
                    height={window.innerHeight * .3}
                    fill="blue"
                    stroke="black"
                    strokeWidth='2'
                />
              </Group>
              <Group id="Player1">
                <Rect
                     x={20}
                     y={window.innerHeight * .72}
                     width={window.innerWidth * .95}
                     height={window.innerHeight * .3}
                     fill="Yellow"
                     stroke="black"
                     strokeWidth='2'
                />
              </Group>
          </Group>
        </Layer>
      </Stage>
    );
  }
}

render(<App />, document.getElementById('root'));