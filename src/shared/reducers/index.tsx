import { combineReducers } from "redux";
import bracketReducer, { BracketState } from "./bracketReducer";
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

export interface IRootState {
  /* jhipster-needle-add-reducer-type - JHipster will add reducer type here */
  readonly bracketReducer: BracketState;
}

const rootReducer = combineReducers<IRootState>({
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
  bracketReducer
});

export default rootReducer;
