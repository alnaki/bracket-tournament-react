import { createStore, combineReducers } from "redux";
import { bracketReducer } from "./bracket/reducers";

const rootReducer = combineReducers({
  bracket: bracketReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(
    rootReducer
  );
  return store;
}
