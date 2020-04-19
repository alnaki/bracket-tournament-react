import { IBracket } from "../../config/model";
import { BracketActionTypes } from "./types";
import uuid from "uuid/v4"
import * as types from "./types";

const initialState: IBracket = {
  id: uuid(),
  name: "Tournament",
  editionMode: true,
  nbTeamMaxByDuel: 2,
  nbTeamWinner: 1,
  nbRoundMax: 0,
  teamIds: ["1", "2"],
  rounds: [{
    id: "1",
    name: "round un",
    roundNumber: 1,
    duelsId: ["1", "2"]
  },
  {
    id: "2",
    name: "round deux",
    roundNumber: 2,
    duelsId: ["1"]
  }]
};

export function bracketReducer(
  state = initialState,
  action: BracketActionTypes
): IBracket {
  switch (action.type) {
    case types.RESET_BRACKET:
      return {
        ...state,
        rounds: []
      }
    case types.CHANGE_NAME:
      return {
        ...state,
        name: action.value
      };
    case types.CHANGE_MODE:
      return {
        ...state,
        editionMode: action.value
      };
    case types.CHANGE_NB_TEAM_MAX_BY_DUEL:
      return upNbTeamByDuel(state, action.value);
    case types.CHANGE_NB_TEAM_WINNER:
      return upNbWinner(state, action.value);
    case types.CHANGE_NB_ROUND_MAX:
      return upNbRoundMax(state, action.value);
    case types.CHANGE_ROUNDS:
      return {
        ...state,
        rounds: action.value
      };
    case types.CHANGE_TEAM_IDS:
      return {
        ...state,
        teamIds: action.value
      };
    default:
      return state;
  }
}

// pas plus de la moitié peuvent gagner
function upNbTeamByDuel(state: IBracket, nb: number): IBracket {
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
function upNbWinner(state: IBracket, nb: number): IBracket {
  if (nb >= 1 && state.nbTeamMaxByDuel >= nb * 2) {
    return {
      ...state,
      nbTeamWinner: nb
    };
  } else {
    return state;
  }
}

function upNbRoundMax(state: IBracket, nb: number): IBracket {
  return state
}