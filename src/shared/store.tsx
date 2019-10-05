import { createStore } from "redux";
import rootReducers from "./store/index";

const configureStore = () => {
  return createStore(rootReducers);
};

export default configureStore;
