import { BRACKET } from "../../config/actionsTypes";

// Initialisation
const initialState = {
  mode: true
};

// Mappeur
export type BracketState = Readonly<typeof initialState>;

export default (
  state: BracketState = initialState,
  action: { type: any }
): BracketState => {
  switch (action.type) {
    case BRACKET.MODE:
      return {
        ...state,
        mode: state.mode
      };
    default:
      return state;
  }
};
