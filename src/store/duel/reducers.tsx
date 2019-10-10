import { DuelActionTypes, DuelState } from "./types";
import * as types from "./types";

const initialState: DuelState = {
  duels: [],
  nbDuel: 0
};

export function duelReducer(
  state = initialState,
  action: DuelActionTypes
): DuelState {
  switch (action.type) {
    case types.ADD_DUEL:
      action.duel.id = state.nbDuel;
      return {
        nbDuel: state.nbDuel++,
        duels: [...state.duels, action.duel]
      };
    case types.EDIT_DUEL:
      return {
        ...state,
        duels: [
          ...state.duels.map(duel =>
            duel.id === action.duel.id ? action.duel : duel
          )
        ]
      };
    case types.DELETE_DUEL:
      return {
        ...state,
        duels: [...state.duels.filter(duel => duel.id !== action.id)]
      };
    default:
      return state;
  }
}
