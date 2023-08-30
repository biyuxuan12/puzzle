import {Direction, spin90} from "../common";

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
}
