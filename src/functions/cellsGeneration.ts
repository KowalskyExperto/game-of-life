export type tablero = Array<Array<number>>;

const createCellsRand = (l: number) => {
  var cells: tablero = new Array(l);
  for (let x = 0; x < cells.length; x++) {
    var row: Array<number> = new Array(l);
    for (let y = 0; y < row.length; y++) {
      row[y] = Math.round(Math.random());
    }
    cells[x] = row;
  }
  return cells;
};

const nextGeneration = (cells: tablero, l: number) => {
    var newCells: tablero = new Array(l);
    const dx: Array<number> = [0, 0, 1, -1, 1, -1, -1, 1];
    const dy: Array<number> = [1, -1, 0, 0, 1, -1, 1, -1];
    for (let y = 0; y < cells.length; y++) {
      var row: Array<number> = new Array(l);
      for (let x = 0; x < cells.length; x++) {
        let cont = 0;
        for (let k = 0; k < dx.length; k++) {
          const xx: number = x + dx[k];
          const yy: number = y + dy[k];
          if (
            xx &&
            yy &&
            0 <= xx &&
            xx < cells.length &&
            0 <= yy &&
            yy < cells.length
          ) {
            if (cells[yy][xx] === 1) {
              cont++;
            }
          }
        }
        if (
          (cells[y][x] === 1 && (cont === 2 || cont === 3)) ||
          (cont === 3 && cells[y][x] === 0)
        ) {
          row[x] = 1;
        } else {
          row[x] = 0;
        }
      }
      newCells[y] = row;
    }
    return newCells;
  };

export {nextGeneration, createCellsRand};