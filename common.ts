import {URLSearchParams} from "url";

export interface Position {
    row: number,
    column: number
}

export enum Direction{
    Left,
    Up,
    Right,
    Down
}

export function spin90(vector:Direction[]):Direction[]{
    return vector.map(direction=>(direction +1)%4 as Direction)
}

export function positionAvailable(map: number[][], position: Position) {

    return position.row >= 0 && position.column >= 0 && map.length > position.row && map[position.row].length > position.column && map[position.row][position.column] === 0
}

export  function setValueToPosition(map: number[][], position: Position,value:number){
    map[position.row][position.column]=value
}

export function positionMoveBy(position:Position,direct:Direction):Position{
    switch (direct){
        case Direction.Down:
            return {row:position.row+1,column:position.column};
        case Direction.Up:
            return {row:position.row-1,column:position.column};
        case Direction.Left:
            return {row:position.row,column:position.column-1};
        case Direction.Right:
            return {row:position.row,column:position.column+1};

    }
}

export function printMap(map:number[][]){
    map.forEach(row=> console.log(row.join(' ')));
}