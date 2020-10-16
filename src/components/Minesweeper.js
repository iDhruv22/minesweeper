import React from "react";
import MinesweeperBlocksStyled from "../styled-components/MinesweeperBlocksStyled";
import MinesweeperStyled from "../styled-components/MinesweeperStyled";
import MinesweeperWrapperStyled from "../styled-components/MinesweeperWrapperStyled";
import { emojis } from "../utils/emojis";

function Minesweeper() {
  return (
    <MinesweeperWrapperStyled>
      <MinesweeperStyled>
        <MinesweeperBlocksStyled>{emojis["-1"]}</MinesweeperBlocksStyled>
      </MinesweeperStyled>
    </MinesweeperWrapperStyled>
  );
}

export default Minesweeper;
