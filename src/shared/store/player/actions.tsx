import { GET_PLAYER, CREATE_PLAYER, MODIFY_PLAYER, DELETE_PLAYER } from "./types";
import { IPlayer } from "./types"

export function getPlayer(id: number) {
    return {
        type: GET_PLAYER,
        id: id
    }
};

export function createPlayer(player: IPlayer) {
    return {
        type: CREATE_PLAYER,
        player: player
    }
}

export function modifyPlayer(player: IPlayer) {
    return {
        type: MODIFY_PLAYER,
        player: player
    }
};


export function deletePlayer(id: number) {
    return {
        type: DELETE_PLAYER,
        id: id
    }
}