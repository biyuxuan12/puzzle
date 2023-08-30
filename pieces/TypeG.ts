import {Piece} from "./Piece";
import {Direction} from "../common";

const {Left,Right,Up,Down}=Direction;

export class TypeG extends Piece {
    constructor() {
        super([Up,Up,Up],7);
    }
}
