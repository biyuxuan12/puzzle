import {Piece} from "./Piece";
import {Direction} from "../common";

const {Left,Right,Up,Down}=Direction;

export class TypeC extends Piece {
    constructor() {
        super([Left,Down,Down,Down],3);
    }
}
