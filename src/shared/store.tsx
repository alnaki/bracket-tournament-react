import { createStore } from "redux";
import rootReducers from "../shared/reducers/index";

const configureStore = () => {
  return createStore(rootReducers);
};

export default configureStore;
