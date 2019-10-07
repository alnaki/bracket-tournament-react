import { GET_TEAM, CREATE_TEAM, MODIFY_TEAM, DELETE_TEAM, ADD_PLAYER_IN_TEAM, REMOVE_PLAYER_IN_TEAM } from "./types";
import { ITeam } from "./types"

export function getTeam(id: number) {
    return {
        type: GET_TEAM,
        id: id
    }
};

export function createTeam(team: ITeam) {
    return {
        type: CREATE_TEAM,
        team: team
    }
}

export function modifyTeam(team: ITeam) {
    return {
        type: MODIFY_TEAM,
        team: team
    }
};

export function deleteTeam(id: number) {
    return {
        type: DELETE_TEAM,
        id: id
    }
}

export function addPlayerInTeam(idTeam: number, idPlayer: number) {
    return {
        type: "",
        idTeam: idTeam,
        idPlayer: idPlayer
    }
}

export function removePlayerInTeam(idTeam: number, idPlayer: number) {
    return {
        type: "",
        idTeam: idTeam,
        idPlayer: idPlayer
    }
}