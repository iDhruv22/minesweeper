import React from "react";
import Minesweeper from "./components/Minesweeper";
import Title from "./components/Title";
import AppWrapperStyled from "./styled-components/AppWrapperStyled";
import GameWrapperStyled from "./styled-components/GameWrapperStyled";

function App() {
  return (
    <AppWrapperStyled>
      <GameWrapperStyled>
        <Title />
        <Minesweeper />
      </GameWrapperStyled>
    </AppWrapperStyled>
  );
}

export default App;
