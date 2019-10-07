import { TeamActionTypes, TeamState, GET_TEAM, CREATE_TEAM, MODIFY_TEAM, DELETE_TEAM, ADD_PLAYER_IN_TEAM, REMOVE_PLAYER_IN_TEAM, ITeam } from "./types";
import { number } from "prop-types";

const initialState: TeamState = {
  teamList: [],
  nbTeam: 0,
};

export function bracketReducer(
  state = initialState,
  action: TeamActionTypes): TeamState {
  switch (action.type) {
    case GET_TEAM:
      return { 
      };
    case CREATE_TEAM:
      return {
        ...state,
        mode: action.mode
      };
    case MODIFY_TEAM:
      return {
        ...state,
        mode: action.mode
      };
    case DELETE_TEAM:
      return {
        ...state,
        mode: action.mode
      };
    case ADD_PLAYER_IN_TEAM:
      return {
        ...state,
        mode: action.mode
      };
    case REMOVE_PLAYER_IN_TEAM:
      return {
        ...state,
        mode: action.mode
      };
    default:
      return state;
  }
};