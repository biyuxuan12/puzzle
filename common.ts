import {URLSearchParams} from "url";

export interface Position {
    x: number,
    y: number
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
    return map.length > position.x && map[position.x].length > position.y && map[position.x][position.y] === 0
}

export  function setValueToPosition(map: number[][], position: Position,value:number){
    map[position.x][position.y]=value
}
