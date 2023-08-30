import {Piece} from "./Piece";
import {Direction} from "../common";

const {Left,Right,Up,Down}=Direction;

export class TypeD extends Piece {
    constructor() {
        super([Up,Right,Right,Down],4);
    }
}
