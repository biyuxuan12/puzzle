import {Piece} from "./Piece";
import {Direction} from "../common";

const {Left,Right,Up,Down}=Direction;

export class TypeE extends Piece {
    constructor() {
        super([Up,Up,Right,Right],5);
    }
}
