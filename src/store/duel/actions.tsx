import { ADD_DUEL, EDIT_DUEL, DELETE_DUEL } from "./types";
import { IDuel } from "../../config/model";

export function addDuel(player: IDuel) {
    return {
        type: ADD_DUEL,
        player: player
    };
}

export function editDuel(player: IDuel) {
    return {
        type: EDIT_DUEL,
        player: player
    };
}

export function deleteDuel(id: number) {
    return {
        type: DELETE_DUEL,
        id: id
    };
}