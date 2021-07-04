import { Cell } from "./Cell"
const { v4: uuidV4 } = require('uuid');

export const RowCells = ({row}:{row:Array<number>}) => {
    return (
        <div className='cells-row'>
            {row.map((c) => <Cell cell={c} key={uuidV4()}/>)}
        </div>
    )
}
