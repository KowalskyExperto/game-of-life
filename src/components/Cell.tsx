export const Cell = ({cell}:{cell:number} ) => {
    const name:string = 'cell ' + ((cell) ? 'alive' : 'dead');
    return <div className={name}/>
}
