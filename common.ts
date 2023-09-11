import exp from "constants";
import {Piece} from "./pieces/Piece";
import {today} from "./originMap";

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

export function positionAvailable(map: number[][], position: Position,sign:number=0) {

    return position.row >= 0 && position.column >= 0 && map.length > position.row && map[position.row].length > position.column && (map[position.row][position.column] === 0 ||map[position.row][position.column] === sign)
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
    map.forEach(row=>
        console.log(row.map(element=>element ===-1?'x':element%10 ).join(' ')));
}



export function serializeStringMapToNumber(map:number[][]):bigint{
    const rowNumber=map.length;
    const columnNumber =map[0].length;
    let result='0b' ;
    for(let rowIndex=0;rowIndex<rowNumber;rowIndex++)
    {
        for(let columnIndex=0;columnIndex<columnNumber;columnIndex++)
        {

            result+=map[rowIndex][columnIndex]===0?'0':'1';
        }
    }
    return BigInt(result);
}
export const oneInBinary128Table=HowManyOneAreThereInBinary128Table();
 function HowManyOneAreThereInBinary128Table():number[]{

    return [...new Array(256).keys()].map(i=>calculateHowManyOneInANumber8(i))
}

function calculateHowManyOneInANumber8(i:number){
    let result:number =0;
    const binaryString = i.toString(2);
    for(let char of binaryString ){
        result+=parseInt(char);
    }
    return result;
}

export function calculateHowManyOneInANumber64(number:bigint){
     let result =0;
     for(let i=0;i<8;i++)
     {
         const temp = number & 255n
         result+=oneInBinary128Table[Number(temp)]
         number >>= 8n;
     }
     return result
}

export function pieceCandAddToMap(mapBinary:bigint,pieceBinary:bigint,newBinary:bigint):boolean {
    return calculateHowManyOneInANumber64(newBinary) === calculateHowManyOneInANumber64(mapBinary) + calculateHowManyOneInANumber64(pieceBinary);

}

export function printSolutionResult(pieces:Piece[],solution:string)
{
    const map =structuredClone(today());
    const rowNum = map.length;
    const columnNum = map[0].length;
    solution.slice(1).split('|').forEach((pieceBinary,pieceIndex)=>{
        const pieceMap =pieces[pieceIndex].solutionSpaceMap.get(BigInt(pieceBinary));
            for (let  row=0;row<rowNum;row++) {
                for (let column = 0; column < columnNum; column++) {
                    map[row][column]+=pieceMap![row][column]
                }
            }
    })
console.log("----------------------------------")
    printMap(map);
}