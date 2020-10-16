import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { SIZE } from "../config/game";
import cellGenerator from "../utils/cellGenerator";
import { GameStatus } from "../utils/gameStatus";

const MinesweeperContext = React.createContext(null);

function useMinesweeperGame() {
  const minesweeperGame = useContext(MinesweeperContext);

  if (minesweeperGame) {
    return minesweeperGame;
  }

  throw new Error(
    "useMinesweeperGame hook can be use under the <MinesweeperContext> context"
  );
}

/** complete state of the game */
function MinesweeperProvider(props) {
  const [cells, setCells] = useState(cellGenerator(SIZE).map); // stores the array of cells
  const [gameStatus, setGameStatus] = useState(GameStatus.PLAYING); // stores the status of the game
  const [gameVersions, setGameVersions] = useState(0); // stores the version of the game

  /** reset the game if gameversion changes */
  useEffect(() => {
    setCells(cellGenerator(SIZE).map);
    setGameStatus(GameStatus.PLAYING);
  }, [gameVersions]);

  return (
    <MinesweeperContext.Provider
      value={{
        cells,
        gameStatus,
        setCells,
        setGameStatus,
        gameVersions,
        setGameVersions,
      }}
    >
      {props.children}
    </MinesweeperContext.Provider>
  );
}

export default MinesweeperProvider;
export { useMinesweeperGame };
