import React from 'react';
import './App.css';
import ContentCard from './modules/card/card';

const App: React.FC = () => {
  return (
    <div className="App">
      <ContentCard>
        <div></div>  
      </ContentCard>
    </div>
  );
}

export default App;
