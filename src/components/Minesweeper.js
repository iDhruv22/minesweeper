import React from "react";
import { SIZE } from "../config/game";
import { useMinesweeperGame } from "../context/MinesweeperContext";
import MinesweeperBlocksStyled from "../styled-components/MinesweeperBlocksStyled";
import MinesweeperStyled from "../styled-components/MinesweeperStyled";
import MinesweeperWrapperStyled from "../styled-components/MinesweeperWrapperStyled";
import CellFectory from "../utils/cellFactory";
import { emojis } from "../utils/emojis";
import { GameStatus } from "../utils/gameStatus";

function Minesweeper() {
  const { cells, setCells, setGameStatus } = useMinesweeperGame();

  function _handleOnClick(row, column) {
    return (e) => {

      /** if already clicked then no need to do anything */
      if (cells[row * SIZE + column].opened) return;
      const { clone } = CellFectory();

      /** clone current state */
      let cloneCells = [...cells].map((el) => {
        return clone(el.mines, el.isMine, el.opened, el.text);
      });

      /** mark current cell opened */
      cloneCells[row * SIZE + column].opened = true;

      /** cells around current cell */
      let positions = {
        left: [row, column - 1],
        right: [row, column + 1],
        top: [row - 1, column],
        bottom: [row + 1, column],
        topLeft: [row - 1, column - 1],
        topRight: [row - 1, column + 1],
        bottomLeft: [row + 1, column - 1],
        bottomRight: [row + 1, column + 1],
      };

      /** if the current cell has mine then end the game  */
      if (cloneCells[row * SIZE + column].isMine) {
        cloneCells = cloneCells.map((el) => {
          if (el.isMine === true) {
            return { ...el, opened: true, text: emojis["-1"] };
          } else
            return {
              ...el,
              opened: true,
            };
        });
        /** set game status to gameover */
        setGameStatus(GameStatus.GAMEOVER);
      } else {
        for (let key in positions) {
          let [x, y] = positions[key];
          /** check for the position which resides in matrix */
          if (x >= 0 && x < SIZE && y >= 0 && y < SIZE) {
            /** increase the mines count if surrounding cells has mine */
            if (cloneCells[x * SIZE + y].isMine) {
              cloneCells[row * SIZE + column].mines =
                cloneCells[row * SIZE + column].mines + 1;
            }
          }
        }

        /** set current cells with number of mines around it */
        cloneCells[row * SIZE + column].text =
          emojis[cloneCells[row * SIZE + column].mines];
      }
      setCells(cloneCells);
    };
  }

  function getBlocks() {
    let blocks = [];
    let row = 0;
    let column = 0;

    /** create Size*Size matrix */
    cells.forEach((_, i) => {
      blocks.push(
        <MinesweeperBlocksStyled key={i} onClick={_handleOnClick(row, column)}>
          {cells[i].opened ? cells[i].text : ""}
        </MinesweeperBlocksStyled>
      );
      column++;
      if (column >= SIZE) {
        row++;
        column = 0;
      }
    });

    return blocks;
  }

  return (
    <MinesweeperWrapperStyled>
      <MinesweeperStyled row={SIZE}>{getBlocks()}</MinesweeperStyled>
    </MinesweeperWrapperStyled>
  );
}

export default Minesweeper;
