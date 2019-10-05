import { BracketActionTypes, BracketState, BRACKET_MODE } from "./types";

const initialState = {
  mode: true
};

export function bracketReducer(
  state = initialState,
  action: BracketActionTypes): BracketState {
  switch (action.type) {
    case BRACKET_MODE:
      console.log(state.mode)
      return {
        ...state,
        mode: true
      };
    default:
      return state;
  }
};