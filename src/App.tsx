import React from 'react';
import './App.css';
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import RommiGame from './components/RommiGame.tsx';
function App() {
  return (
    <DndProvider backend = {HTML5Backend} >
      <div className="App">
        <RommiGame/>
      </div>
    </DndProvider>
  );
}

export default App;
