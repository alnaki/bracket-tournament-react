import { BracketActionTypes, BracketState } from "./types";
import * as types from "./types";
const initialState: BracketState = {
  name: "Tournament",
  edition: false,
  nbTeamMaxByDuel: 4,
  nbTeamWinner: 1
};

export function bracketReducer(
  state = initialState,
  action: BracketActionTypes
): BracketState {
  switch (action.type) {
    case types.CHANGE_NAME:
      return {
        ...state,
        name: action.value
      };
    case types.CHANGE_MODE:
      return {
        ...state,
        edition: action.value
      };
    case types.CHANGE_NB_TEAM_MAX_BY_DUEL:
      return {
        ...state,
        nbTeamMaxByDuel: action.value
      };
    case types.CHANGE_NB_TEAM_WINNER:
      if (initialState.nbTeamWinner / 2 < initialState.nbTeamMaxByDuel) {
        return {
          ...state,
          nbTeamWinner: action.value
        };
      } else {
        return state;
      }
    default:
      return state;
  }
}
