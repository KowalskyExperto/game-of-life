import { Cell } from "./Cell"

export const RowCells = ({row}:{row:Array<number>}) => {
    return (
        <div className='cells-row'>
            {row.map((c,index) => <Cell cell={c} key={index}/>)}
        </div>
    )
}
