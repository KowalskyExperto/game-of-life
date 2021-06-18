import { useEffect, useState } from 'react';
import { RowCells } from './RowCells';

import './GameOfLife.css';

type tablero = Array<Array<number>>
export const GameOfLife = () => {
    const len = 50;
    const createCellsRand = (l:number) => {
        var cells:tablero = new Array(l)
        for (let x = 0; x < cells.length; x++) {
            var row:Array<number> = new Array(l);
            for (let y = 0; y < row.length; y++) {
                row[y] = Math.round(Math.random())
            };
            cells[x] = row;
            
        }
        return cells;
    }

    const [cells, setCells] = useState<tablero>(createCellsRand(len))
    const generateNewCells = () => {
        setCells(createCellsRand(len))
    }

    const nextGeneration = (cells:tablero,l:number) => {
        var newCells: tablero = new Array(l);
        const dx:Array<number> = [0,0,1,-1,1,-1,-1,1]
        const dy:Array<number> = [1,-1,0,0,1,-1,1,-1]
        for (let y = 0; y < cells.length; y++) {
            var row:Array<number> = new Array(l);
            for (let x = 0; x < cells.length; x++) {
                let cont = 0
                for (let k = 0; k < dx.length; k++) {
                    const xx:number = x + dx[k]
                    const yy:number = y + dy[k]
                    if( xx && yy &&
                        0 <= xx &&
                        xx < cells.length &&
                        0 <= yy &&
                        yy < cells.length
                    ) {
                        if(cells[yy][xx]===1){
                            cont++;
                        }
                    }
                }
                if((cells[y][x]===1 && (cont===2 || cont===3) ) || (cont===3 && cells[y][x]===0)) {
                    row[x] = 1
                } else {
                    row[x] = 0
                }
            }
            newCells[y]=row;
            
        }
        
        return newCells;
    }
    
    const nextFrame = () => {
        
    }
    const sleep = (ms: number) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    useEffect(() => {
        const timer = setTimeout(() => {
            setCells(nextGeneration(cells,len))
        },200);
        return () => clearTimeout(timer);
    }, [cells])

    const life =  () => {
        sleep(2500)
        console.log('Algo 1')
        setTimeout(()=> {nextFrame()},3000)
        sleep(2500)
        console.log('Algo 2')
        nextFrame()
        sleep(2500)
        console.log('Algo 3')
        nextFrame()
    }

    return (
        <div>
            <h1>The Game Of Life</h1>
            <div className="cells">
            {
                cells.map((row,index) => {
                    return <RowCells row={row} key={index}/>
                })
            }
            </div>
            <button onClick={generateNewCells}>New Cells</button>
            <button onClick={()=>{console.table(cells)}}>Console Cells</button>
            <button onClick={life}>Start</button>
        </div>
    )
}