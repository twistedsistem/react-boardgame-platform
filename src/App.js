import React from "react";
import "./App.scss"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

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

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div
        style={{
          display: "flex",
          border: "1px solid black",
          height: "75%",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h2>Main Game Board Area</h2>
      </div>
      <div
        style={{
          display: "flex",
          border: "5px solid orange",
          height: "25%",
        }}
      >
        <Tabs selected={1}>
          <Panel title="First Player">This is the first panel</Panel>
          <Panel title="Second Player">This is the second panel</Panel>
          <Panel title="Shared Decks">This is the third panel</Panel>
        </Tabs>
      </div>
    </div>
  );
}

export default App;