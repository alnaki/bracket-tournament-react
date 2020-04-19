import { DuelActionTypes, DuelState } from "./types";
import * as types from "./types";

const initialState: DuelState = {
    duelList: [{ id: "1", duelsScore: [{ idTeam: "1", score: 1 }, { idTeam: "2", score: 2 }] }, { id: "2", duelsScore: [] }],
};

export function duelReducer(
    state = initialState,
    action: DuelActionTypes
): DuelState {
    switch (action.type) {
        case types.ADD_DUEL:
            return {
                duelList: [...state.duelList, action.duel]
            };
        case types.EDIT_DUEL:
            return {
                ...state,
                duelList: [
                    ...state.duelList.map(duel =>
                        duel.id === action.duel.id ? action.duel : duel
                    )
                ]
            };
        case types.DELETE_DUEL:
            return {
                ...state,
                duelList: [
                    ...state.duelList.filter(duel => duel.id !== action.duelId)
                ]
            };
        default:
            return state;
    }
}
