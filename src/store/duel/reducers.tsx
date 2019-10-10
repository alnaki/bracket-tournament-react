import { DuelActionTypes, DuelState } from "./types";
import * as types from "./types";

const initialState: DuelState = {
  duelList: [],
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
          ...state.duelList.filter(duel => duel.id !== action.bracketId)
        ]
      };
    default:
      return state;
  }
}
