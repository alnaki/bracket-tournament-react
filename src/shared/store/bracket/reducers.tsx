import { BracketActionTypes, BracketState } from "./types";
import * as types from "./types";
const initialState: BracketState = {
  name: "Tournament",
  mode: false,
  nbPlayerMaxByTeam: 4,
  nbTeamWinner: 1,
  fontColor: "#eceff1",
  tournament: []
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
        mode: action.value
      };
    case types.CHANGE_NB_PLAYER_MAX_BY_TEAM:
      return {
        ...state,
        nbPlayerMaxByTeam: action.value
      };
    case types.CHANGE_NB_TEAM_WINNER:
      return {
        ...state,
        nbTeamWinner: action.value
      };
    case types.CHANGE_FONT_COLOR:
      return {
        ...state,
        fontColor: action.value
      };
    default:
      return state;
  }
}
