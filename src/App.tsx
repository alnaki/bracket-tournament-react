import React from 'react';
import './App.css';
import ContentCard from './modules/card/card';
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
