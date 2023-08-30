import {Piece} from "./Piece";
import {Direction} from "../common";

const {Left,Right,Up,Down}=Direction;

export class TypeI extends Piece {
    constructor() {
        super([Right,Direction.Down,Direction.Down,Right],9);
    }
}
