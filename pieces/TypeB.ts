import {Piece} from "./Piece";
import {Direction} from "../common";

const {Left,Right,Up,Down}=Direction;

export class TypeB extends Piece {
    constructor() {
        super([Down, Down, Right,Up],2);
    }
}
