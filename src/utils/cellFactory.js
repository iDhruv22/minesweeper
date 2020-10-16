class Cell {
  mines = 0; // number of mines around the particular cell
  isMine = false; // does this cell has mine?
  opened = false; //  is opened cell?
  text = ""; // text to be printed in the cell
  constructor(mines, isMine, opened, text) {
    this.mines = mines;
    this.isMine = isMine;
    this.opened = opened;
    this.text = text;
  }
}

function CellFectory() {
  return {
    create: (mines, isMine, opened = false, text) => {
      return new Cell(mines, isMine, opened, text);
    },
    clone: (mines, isMine, opened, text) => {
      return new Cell(mines, isMine, opened, text);
    },
  };
}

export default CellFectory;
