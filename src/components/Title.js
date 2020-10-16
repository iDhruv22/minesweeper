import React from "react";
import TitleStyled from "../styled-components/TitleStyled";
import { emojis } from "../utils/emojis";

function Title() {
  return (
    <TitleStyled>
      <span>{emojis["n"]}</span> Minesweeper <span>{emojis["-1"]}</span>
    </TitleStyled>
  );
}

export default Title;
