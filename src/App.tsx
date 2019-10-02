import React from 'react';
import './App.css';
import TeamCard from './modules/card/teamCard';
import BracketColumn from './modules/bracket/column';
import Bracket from './modules/bracket/bracket';

const App: React.FC = () => {
  return (
    <div className="App">
      <Bracket></Bracket>

    </div>
  );
}

export default App;
