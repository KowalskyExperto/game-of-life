import { useEffect, useState } from "react";
import { RowCells } from "./RowCells";
import "./GameOfLife.css";
import {
  createCellsRand,
  nextGeneration,
  tablero,
} from "../functions/cellsGeneration";

const { v4: uuidV4 } = require("uuid");

export const GameOfLife = () => {
  const [len, setLen] = useState(50);
  const [lapse, setLapse] = useState(100);
  const [cells, setCells] = useState<tablero>(createCellsRand(len));
  const generateNewCells = () => {
    setCells(createCellsRand(len));
  };
  const onChangeLapse = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLapse(parseInt(event.target.value));
  };

  const [refresh, setRefresh] = useState(0);

  const onChangeLen = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLen(parseInt(event.target.value));
    setRefresh(1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (refresh === 0) {
        setCells(nextGeneration(cells, len));
      } else {
        setCells(createCellsRand(len));
        setRefresh(0);
      }
    }, lapse);
    return () => clearTimeout(timer);
  }, [cells, lapse, len, refresh]);

  return (
    <>
      <h1>The Game Of Life</h1>
      <div className="row">
        <div className="col">
          <button onClick={generateNewCells}>New Cells</button>
          <div>
            <p>{lapse}</p>
            <p>
              25ms
              <input
                type="range"
                className="slider"
                min="25"
                max="1000"
                step="25"
                value={lapse}
                onChange={onChangeLapse}
              />
              1000ms
            </p>
          </div>
          <div>
            <p>
              10
              <input
                type="range"
                className="slider"
                min="10"
                max="75"
                step="5"
                value={len}
                onChange={onChangeLen}
              />
              50
            </p>
          </div>
        </div>
        <div className="cells col centered">
          {refresh ? (
            <p>Cargando</p>
          ) : (
            cells.map((row) => {
              return <RowCells row={row} key={uuidV4()} />;
            })
          )}
        </div>
      </div>
    </>
  );
};
