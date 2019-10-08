import { BracketActionTypes, BracketState, CHANGE_MODE } from "./types";

const initialState: BracketState = {
  name: "Tournament",
  mode: false,
  nbPlayerMaxByTeam: 4,
  nbTeamWinner: 1,
  fontColor: "grey"
};

export function bracketReducer(
  state = initialState,
  action: BracketActionTypes
): BracketState {
  switch (action.type) {
    case CHANGE_MODE:
      return {
        ...state,
        mode: action.value
      };
    default:
      return state;
  }
}
