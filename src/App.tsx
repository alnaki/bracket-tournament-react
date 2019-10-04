import React from "react";
import "./App.css";
import Bracket from "./modules/bracket/bracket";
import TeamProperties from "./modules/card/teamProperties";
// import { Provider } from "react-redux";
// import store from "./shared/store";

const App: React.FC = () => {
  return (
    // <Provider store={store} className="App">
    //   <Bracket />
    // </Provider>
    <div className="App">
      <TeamProperties />
    </div>
  );
};

export default App;
