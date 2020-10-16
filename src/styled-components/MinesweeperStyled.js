import styled from "styled-components";

const Minesweeper = styled.div`
  padding: 10px;
  display: inline-grid;
  grid-gap: 1px;
  grid-template-columns: ${(props) => `repeat(${props.row}, 25px)`};
  grid-template-rows: ${(props) => `repeat(${props.row}, 25px)`};
  justify-items: center;
  align-items: center;
`;

export default Minesweeper;
