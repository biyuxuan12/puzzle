import  {today} from "./originMap";
import {TypeA} from "./pieces/TypeA";
import {Piece} from "./pieces/Piece";
import {printMap} from "./common";
import {TypeB} from "./pieces/TypeB";
import {TypeC} from "./pieces/TypeC";
import {TypeD} from "./pieces/TypeD";
import {TypeE} from "./pieces/TypeE";
import {TypeF} from "./pieces/TypeF";
import {TypeG} from "./pieces/TypeG";
import {TypeH} from "./pieces/TypeH";
import {TypeI} from "./pieces/TypeI";
import {TypeJ} from "./pieces/TypeJ";

const piecesList:Piece[] = [new TypeA(),
    new TypeB(),
    new TypeC(),
    new TypeD(),
    new TypeE(),
    new TypeF(),
    new TypeG(),
    new TypeH(),
    new TypeI(),
    new TypeJ(),
]

const todayMap =today()
console.log("today")

printMap(todayMap)


addPiece(todayMap,0)

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
