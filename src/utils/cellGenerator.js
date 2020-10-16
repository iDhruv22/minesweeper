import CellFectory from "./cellFactory";

function cellGenerator(size) {
  const { create } = CellFectory();
  let mines = 0;
  let map = Array(size).fill(null);
  for (let i = 0; i < size * size; i++) {
    let randomNumber = Math.floor(Math.random() * 5);
    let ifRandomEven = randomNumber === 4;
    if (ifRandomEven) mines += 1;
    map[i] = create(0, ifRandomEven);
  }
  return { map, mines };
}

export default cellGenerator;
