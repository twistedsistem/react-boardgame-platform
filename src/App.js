import React, {useEffect, useState} from "react";
import "./App.scss"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const DATA = [
  {
    id: "gameBoard", label: 'Main Game Board Area',
    items: []
  },  
  {
    id: "player1", label: 'Player One',
    items: [
      {id: 'card1', label: 'Player Card One'}, 
      {id: 'card2', label: 'Player Card Two'}
    ]
  },
  {
    id: "player2", label: 'Player Two',
    items: [
      {id: 'card3', label: 'Player Card Three'}, 
      {id: 'card4', label: 'Player Card Four'}
    ]
  },
  {
    id: "player3", label: 'Player Three',
    items: [
      {id: 'card5', label: 'Player Card Five'}, 
      {id: 'card6', label: 'Player Card Six'}
    ]
  }
];

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected:this.props.selected || 0
    };
  }
  render(){
    return (<div>
      <ul className="inline">
        {this.props.children.map((elem,index)=>{
          let style = index === this.state.selected ? 'selected': '';
         return <li className={style} key={index} onClick={this.handleChange.bind(this,index)}>{elem.props.title}</li>
        })}
      </ul>
      <div className="tab">{this.props.children[this.state.selected]}</div>
      </div>
    )
  }
  handleChange(index){
    this.setState({selected:index})
  }
}

class Panel extends React.Component {
  render(){
    return <div>{this.props.children}</div>
  }
}

// function buildAndSave(items)
// {
//   const groups = {};
//   for (let i = 0; i < Object.keys(items).length; ++i) {
//     const currentGroup = items[i];
//     groups[currentGroup.id] = i;
//   }
  
//   // Set the data.
//   setItems(items);
  
//   // Makes the groups searchable via their id.
//   setGroups(groups);
// }

function App()
{
  return (
    <DragDropContext
    onDragEnd={(result) => {
      const { destination, draggableId, source, type, } = result;

      if (!destination) {
        return;
      }

      if (destination.droppableId === source.droppableId && destination.index === source.index) {
        return;
      }  }}
    >
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <GameBoard />
        <div
          style={{
            display: "flex",
            border: "5px solid orange",
            height: "25%",
          }}
        >
        <PlayerBoard />
        </div>
      </div>
    </DragDropContext>
  )
}

function GameBoard(){
  return(
    <Droppable droppableId="droppable-1" type="group">
          {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={{
                  display: "flex",
                  border: "1px solid black",
                  height: "75%",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                {...provided.droppableProps}
                id="gameBoard" 
              >
                <h2>Main Game Board Area</h2>
                {provided.placeholder}
              </div>
          )}
        </Droppable>
  );
}

function PlayerBoard() {
  return(
    <Tabs selected={0}>
          <Panel title="First Player" id="player1">
            <Droppable droppableId="droppable-2" type="group">
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  style={{
                    display: "flex",
                    height: "75%",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  {...provided.droppableProps}
                >
                  <Draggable draggableId="draggable-1" index={0}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <h4>My draggable</h4>
                      </div>
                    )}
                  </Draggable>
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Panel>
          <Panel title="Second Player" id="player1">
              This is the second panel 
          </Panel>
          <Panel title="Third Player" id="player1">
              This is the third panel
          </Panel>
        </Tabs>
  );

}

export default App;