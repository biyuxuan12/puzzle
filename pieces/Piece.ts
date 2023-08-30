import {Direction, Position, positionAvailable, positionMoveBy, setValueToPosition, spin90} from "../common";

export abstract class Piece{
    public vector:Direction[];
    public vector90:Direction[];
    public vector180:Direction[];
    public vector270:Direction[];
    public sign: number ;
    protected constructor(vector:Direction[],sign:number) {
        this.vector=vector;
        this.vector90=spin90(vector);
        this.vector180=spin90(this.vector90);
        this.vector270=spin90(this.vector180);
        this.sign=sign;
    }

    public tryAddPieceToMap(map:number[][],position:Position):number[][][]{

        if(!positionAvailable(map,position))
        {
            return [] as number[][][]
        }
        const result =[];
        result.push(this.addDirectionInThisPosition(map,position,this.vector));
        result.push(this.addDirectionInThisPosition(map,position,this.vector90));
        result.push(this.addDirectionInThisPosition(map,position,this.vector180));
        result.push(this.addDirectionInThisPosition(map,position,this.vector270));
        return result.filter(newMap=>newMap!== null) as number[][][]
    }

    private addDirectionInThisPosition(map:number[][],position:Position,vector:Direction[]){
        const newMap =structuredClone(map);
        let checkPosition = structuredClone(position);
        setValueToPosition(newMap,checkPosition,this.sign)
        for(let index in vector)
        {
            checkPosition =positionMoveBy(checkPosition,vector[index]);
            if(positionAvailable(newMap,checkPosition,this.sign))
            {
                setValueToPosition(newMap,checkPosition,this.sign)

            }else return null;
        }
        return newMap;
    }


}
