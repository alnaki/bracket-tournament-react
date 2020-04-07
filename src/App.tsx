import React, { Component } from "react";
import Bracket from "./modules/bracket/bracket";
import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <Provider store={store}>
            <Bracket />
        </Provider>
      </div>
    );
  }
}
