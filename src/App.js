import React, { useState } from 'react';
import './App.css';

import PromptResult from "./components/PromptResult";
import ChoiceCard from "./components/ChoiceCard";
import ChoiceButtons from "./components/ChoiceButtons";
import { CHOICES, getRoundOutcome } from "./utils/index";

let isReady = false;
let flawless = 0;

function App() {

  const [prompt, setGamePrompt] = useState(null);
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [previousWinner, setPreviousWinner] = useState(null);
  const [flawlessWinner, setFlawlessWiner] = useState(null);
  const [gameHistory, setGameHistory] = useState([]);

  let [userName, setUserName] = useState(null)

  const onPlayerChoose = playerChoice => {
    if (!isReady) return;

    const [result, compChoice] = getRoundOutcome(playerChoice);
    const newUserChoice = CHOICES[playerChoice];
    const newComputerChoice = CHOICES[compChoice];
    setPlayerChoice(newUserChoice);
    setComputerChoice(newComputerChoice);

    if (result === "Victory!") {
      setPreviousWinner({userName});
      // positive
      if (flawless < 0) flawless = 1;
      else flawless += 1;

      if (flawless > 2) setFlawlessWiner({userName});

    } else if (result === "Defeat!") {
      setPreviousWinner("Dire");
      // negative
      if (flawless > 0) flawless = -1;
      else flawless -= 1;

      if (flawless < -2) setFlawlessWiner("Dire");

    } else {
      setPreviousWinner("Tie");
      // 0
      flawless = 0;
    }

    gameHistory.push(result);

    setGamePrompt(result);
    setGameHistory(gameHistory);
  };

  const onPlayerRegister = () => {
    if (!isReady) {
      isReady = true;
    }
    setUserName(document.getElementById("inputUserName").value);
  };

  return (
    <div className="App">
      <div className="row mb-3">
        <div className="col-md-4 themed-grid-col">
          <ChoiceCard
            title="Dire"
            previousWinner={previousWinner}
            imgURL={computerChoice && computerChoice.url} />
        </div>
        <div className="col-md-2 themed-grid-col d-flex flex-column justify-content-center">
          <div className="container">
            <PromptResult rs={prompt} />
            <ChoiceButtons onPlayerChoose={onPlayerChoose} />
          </div>
        </div>
        <div className="col-md-4 themed-grid-col">
          <ChoiceCard
            title={userName}
            previousWinner={previousWinner}
            imgURL={playerChoice && playerChoice.url} />
        </div>
        <div className="col-md-2 themed-grid-col d-flex flex-column justify-content-center">
          {
            userName == null ? <input type="text" id="inputUserName" placeholder="Enter player name" className="input-text" /> : <h1>{userName}</h1>
          }
          <div>
            <button
              className="btn btn-success btn-lg "
              onClick={() => onPlayerRegister()}>Start
              </button>
          </div>
          <h2 className="rocket-text">Flawless Winner: {flawlessWinner}</h2>
          <h3 className="rocket-text">History:</h3>
          <ul>
            {gameHistory.map(h => {
              return <li>{userName} {h}</li>;
            })}
          </ul>
        </div>
      </div>
    </div >
  );
}

export default App;