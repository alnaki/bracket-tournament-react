import { RoundActionTypes, RoundState } from "./types";
import * as types from "./types";

const initialState: RoundState = {
  rounds: [],
  nbRound: 0
};

export function roundReducer(
  state = initialState,
  action: RoundActionTypes
): RoundState {
  switch (action.type) {
    case types.ADD_ROUND:
      !action.round
        ? (action.round = {
            id: state.nbRound,
            duels: []
          })
        : (action.round.id = state.nbRound);
      return {
        nbRound: state.nbRound++,
        rounds: [...state.rounds, action.round]
      };
    case types.EDIT_ROUND:
      return {
        ...state,
        rounds: [
          ...state.rounds.map(round =>
            round.id === action.round.id ? action.round : round
          )
        ]
      };
    case types.DELETE_ROUND:
      return {
        ...state,
        rounds: [...state.rounds.filter(round => round.id !== action.id)]
      };
    default:
      return state;
  }
}
