import {Piece} from "./Piece";
import {Direction} from "../common";

const {Left,Right,Up,Down}=Direction;

export class TypeH extends Piece {
    constructor() {
        super([Down,Right,Down],8);
    }
}
