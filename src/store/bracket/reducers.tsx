import { BracketActionTypes, BracketState } from "./types";
import * as types from "./types";
const initialState: BracketState = {
  name: "Tournament",
  edition: true,
  nbTeamMaxByDuel: 2,
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
      return upNbTeamByDuel(state, action.value);
    case types.CHANGE_NB_TEAM_WINNER:
      return upNbWinner(state, action.value);
    default:
      return state;
  }
}

// pas plus de la moitié peuvent gagner
function upNbTeamByDuel(state: BracketState, nb: number) {
  if (nb >= 2) {
    if (nb >= state.nbTeamWinner * 2) {
      return {
        ...state,
        nbTeamMaxByDuel: nb
      };
    } else {
      return {
        ...state,
        nbTeamMaxByDuel: nb,
        nbTeamWinner: Math.trunc(nb / 2)
      };
    }
  } else {
    return state;
  }
}

// pas plus de la moitié peuvent gagner
function upNbWinner(state: BracketState, nb: number) {
  if (nb >= 1 && state.nbTeamMaxByDuel >= nb * 2) {
    return {
      ...state,
      nbTeamWinner: nb
    };
  } else {
    return state;
  }
}
