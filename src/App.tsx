import React from "react";
import "./App.css";
import Bracket from "./modules/bracket/bracket";
import PersistanceDrawerLeft from "./modules/bracket/bracketParams";
import { Provider } from "react-redux";
import configureStore from "./shared/store";

const store = configureStore();

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Bracket />
      </Provider>
    </div>
  );
};

export default App;
