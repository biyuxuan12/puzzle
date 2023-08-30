import {Piece} from "./Piece";
import {Direction} from "../common";

const {Left,Right,Up,Down}=Direction;

export class TypeA extends Piece {
    constructor() {
        super([Right, Right, Down],1);
    }
}
