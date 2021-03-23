import React from 'react';
import './App.css';
import BravelyDefault from './games/BravelyDefault1.js';
import BravelyDefault2 from './games/BravelyDefault2.js';
import BravelySecond from './games/BravelySecond.js';
import FinalFantasy5 from './games/FinalFantasy5.js';

const Footer = () => {
  return (
    <div className="footer">
      Made by <a href="https://twitch.tv/doicm/" target="_blank" rel="noreferrer">doicm</a>
    </div>
  )
}

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
        <option value="" disabled hidden>*select a game*</option>
        <optgroup label="Bravely">
          <option value="BD1">Bravely Default</option>
          <option value="BD2">Bravely Default 2</option>
          <option value="BS">Bravely Second</option>
        </optgroup>
        <optgroup label="Final Fantasy">
          <option value="FF5">Final Fantasy 5</option>
        </optgroup>
      </select>
      {
        game === "BD1" ? <BravelyDefault /> 
        : game === "BD2" ? <BravelyDefault2 /> 
        : game === "BS" ? <BravelySecond />
        : game === "FF5" ? <FinalFantasy5 />
        : <></>
      }
      <Footer />
    </div>
  );
}

export default App;
