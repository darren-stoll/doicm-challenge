import React from 'react';
import './App.css';
import BravelyDefault from './games/BravelyDefault1.js';
import BravelyDefault2 from './games/BravelyDefault2.js';
import BravelySecond from './games/BravelySecond.js';

const App = () => {
  const [game, setGame] = React.useState("");

  return (
    <div className="body">
      <h1>Challenge Run Generator</h1>
      <h5>Expect spoilers</h5>
      <select
        value={game}
        onChange={e => setGame(e.currentTarget.value)}
      >
        <option value="" selected disabled hidden>*select a game*</option>
        <option value="BD1">Bravely Default</option>
        <option value="BD2">Bravely Default 2</option>
        <option value="BS">Bravely Second</option>
      </select>
      {
        game === "BD1" ? <BravelyDefault /> 
        : game === "BD2" ? <BravelyDefault2 /> 
        : game === "BS" ? <BravelySecond />
        : <></>
      }
      
    </div>
  );
}

export default App;
