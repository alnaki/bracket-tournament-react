import { RoundActionTypes, RoundState } from "./types";
import * as types from "./types";

const initialState: RoundState = {
  roundList: [],
  nbRound: 0
};

export function roundReducer(
  state = initialState,
  action: RoundActionTypes
): RoundState {
  switch (action.type) {
    case types.ADD_ROUND:
      action.round.id = state.nbRound;
      return {
        nbRound: state.nbRound++,
        roundList: [...state.roundList, action.round]
      };
    case types.EDIT_ROUND:
      return {
        ...state,
        roundList: [
          ...state.roundList.map(round =>
            round.id === action.round.id ? action.round : round
          )
        ]
      };
    case types.DELETE_ROUND:
      return {
        ...state,
        roundList: [
          ...state.roundList.filter(round => round.id !== action.bracketId)
        ]
      };
    default:
      return state;
  }
}
