import React from "react";
import GameInfo from "./components/GameInfo";
import Minesweeper from "./components/Minesweeper";
import Title from "./components/Title";
import MinesweeperProvider from "./context/MinesweeperContext";
import AppWrapperStyled from "./styled-components/AppWrapperStyled";
import GameWrapperStyled from "./styled-components/GameWrapperStyled";

function App() {
  return (
    <AppWrapperStyled>
      <MinesweeperProvider>
        <GameWrapperStyled>
          <Title />
          <Minesweeper />
          <GameInfo />
        </GameWrapperStyled>
      </MinesweeperProvider>
    </AppWrapperStyled>
  );
}

export default App;
