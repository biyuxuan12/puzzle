import {Piece} from "./Piece";
import {Direction} from "../common";

const {Left,Right,Up,Down}=Direction;

export class TypeF extends Piece {
    constructor() {
        super([Up,Right,Up,Up],6);
    }
}
