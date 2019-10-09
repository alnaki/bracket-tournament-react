import { createStore, combineReducers } from "redux";
import { bracketReducer } from "./bracket/reducers";
import { teamReducer } from "./team/reducers";
import { playerReducer } from "./player/reducers";

const rootReducer = combineReducers({
  bracket: bracketReducer,
  teams: teamReducer,
  players: playerReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(rootReducer);
  return store;
}
