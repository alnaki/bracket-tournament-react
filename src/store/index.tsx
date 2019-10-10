import { createStore, combineReducers } from "redux";
import { bracketReducer } from "./bracket/reducers";
import { duelReducer } from "./duel/reducers";
import { playerReducer } from "./player/reducers";
import { roundReducer } from "./round/reducers";
import { teamReducer } from "./team/reducers";

const rootReducer = combineReducers({
  bracket: bracketReducer,
  duel: duelReducer,
  teams: teamReducer,
  round: roundReducer,
  players: playerReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(rootReducer);
  return store;
}
