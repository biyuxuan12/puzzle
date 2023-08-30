import originMap from "./originMap";
import {TypeA} from "./pieces/TypeA";
import {Piece} from "./pieces/Piece";
import {printMap} from "./common";
import {TypeB} from "./pieces/TypeB";

const piecesList:Piece[] = [new TypeA(),new TypeB()]

console.log("originMap")

printMap(originMap)


addPiece(originMap,0)

function addPiece(map: number[][], pieceIndex: number) {
    for (let  x=0;x<map.length;x++) {
        for (let y=0;y<map[x].length;y++) {
            piecesList[pieceIndex].tryAddPieceToMap(map,{row: x,column: y})
                .forEach(result=>{
                    if(pieceIndex==piecesList.length-1){
                    console.log("----------------------")
                    printMap(result)}
                    else
                    {
                        addPiece(result,pieceIndex+1)}

                })
        }
    }
}
