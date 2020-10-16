import React from "react";
import { useMinesweeperGame } from "../context/MinesweeperContext";
import GameInfoStyled from "../styled-components/GameInfoStyled";
import ResetButton from "../styled-components/ResetButtonStyled";
import { emojis } from "../utils/emojis";
import { GameStatus } from "../utils/gameStatus";

function GameInfo() {
  const { gameStatus, gameVersions, setGameVersions } = useMinesweeperGame();

  const _handleReset = () => {
    setGameVersions(gameVersions + 1);
  };

  return (
    <GameInfoStyled>
      <ResetButton onClick={_handleReset}>Reset</ResetButton>
      <div>
        <span>Status:</span>
        <span>
          {gameStatus}&nbsp;
          {gameStatus === GameStatus.GAMEOVER ? emojis["-1"] : emojis["n"]}
        </span>
      </div>
    </GameInfoStyled>
  );
}

export default GameInfo;
