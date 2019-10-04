import React from "react";
import "./App.css";
import Bracket from "./modules/bracket/bracket";
// import { Provider } from "react-redux";
// import store from "./shared/store";

const App: React.FC = () => {
  return (
    // <Provider store={store} className="App">
    //   <Bracket />
    // </Provider>
    <div className="App">
      <Bracket />
    </div>
  );
};

export default App;
