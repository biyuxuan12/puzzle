import {Piece} from "./Piece";
import {Direction} from "../common";

const {Left,Right,Up,Down}=Direction;

export class TypeJ extends Piece {
    constructor() {
        super([Right, Right, Down,Up,Up],10);
    }
}
