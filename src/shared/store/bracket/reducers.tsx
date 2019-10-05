import { BracketActionTypes, BracketState, BRACKET_MODE } from "./types";

const initialState: BracketState = {
  mode: false
};

export function bracketReducer(
  state = initialState,
  action: BracketActionTypes): BracketState {
  switch (action.type) {
    case BRACKET_MODE:
      return {
        ...state,
        mode: action.mode
      };
    default:
      return state;
  }
};