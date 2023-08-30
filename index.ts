import originMap from "./originMap";
import {TypeA} from "./pieces/TypeA";
import {Piece} from "./pieces/Piece";

const piecesList:Piece[] = [new TypeA()]

console.log("hello")
console.log(originMap)
const typeA = new TypeA() ;
console.log(typeA.vector)
console.log(typeA.vector90)

addPiece(originMap,0)

function addPiece(map: number[][], pieceIndex: number) {
    for (const xIndex in map) {
        for (const yIndex in map[xIndex]) {

        }
    }
}
