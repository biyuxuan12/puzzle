import {
    Direction,
    Position,
    positionAvailable,
    positionMoveBy,
    serializeStringMapToNumber,
    setValueToPosition,
    spin90
} from "../common";
import {today} from "../originMap";

export abstract class Piece{
    public vector:Direction[];
    public vector90:Direction[];
    public vector180:Direction[];
    public vector270:Direction[];
    public sign: number ;

    public solutionSpaceMap:Map<bigint,number[][]>=new Map;

    protected constructor(vector:Direction[],sign:number) {
        this.vector=vector;
        this.vector90=spin90(vector);
        this.vector180=spin90(this.vector90);
        this.vector270=spin90(this.vector180);
        this.sign=sign;
        const map=today();
        const rowNumber= map.length;
        const columnNumber =map[0].length;
        const solutionSpace:number[][][]=[];

        const emptyMap:number[][]=[];
        for(let row=0;row<rowNumber;row++)
        {
            emptyMap[row]=[];
            for(let column=0;column<columnNumber;column++)
            {
                emptyMap[row][column]=0;
            }
        }

        for(let row=rowNumber-1;row>=0;row--)
        {
            for(let column=columnNumber-1;column>=0;column--)
            {
                this.tryAddPieceToMap(emptyMap,{row,column}).forEach(solution=>solutionSpace.push(solution))
            }
        }

        this.solutionSpaceMap=new Map();
        solutionSpace.forEach(solution=>this.solutionSpaceMap.set(serializeStringMapToNumber(solution),solution))
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
