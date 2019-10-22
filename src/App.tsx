import React, { Component } from "react";
import Bracket from "./modules/bracket/bracket";
import { Provider } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import configureStore from "./store";

const store = configureStore();

export default class App extends Component {
  dragEnd() {}

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <DragDropContext onDragEnd={this.dragEnd}>
            <Bracket />
          </DragDropContext>
        </Provider>
      </div>
    );
  }
}
