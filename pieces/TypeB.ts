import {Piece} from "./Piece";
import {Direction} from "../common";

const {Left,Right,Up,Down}=Direction;

export class TypeB extends Piece {
    constructor() {
        super([Right, Right, Down,Left],2);
    }
}
