import { TeamActionTypes, TeamState, ADD_TEAM, EDIT_TEAM, DELETE_TEAM, ADD_PLAYER_IN_TEAM, DELETE_PLAYER_IN_TEAM } from "./types";

const initialState: TeamState = {
  teamList: [],
  nbTeam: 0,
};

export function bracketReducer(
  state = initialState,
  action: TeamActionTypes): TeamState {
  switch (action.type) {
    case ADD_TEAM:
        action.player.bracketId = state.nbPlayer;

      return {
        ...state,
        mode: action.mode
      };


      case ADD_PLAYER:
          action.player.bracketId = state.nbPlayer;
          return {
            nbPlayer: state.nbPlayer++,
            playerList: [...state.playerList, action.player]
          };


    case EDIT_TEAM:
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
    case DELETE_PLAYER_IN_TEAM:
      return {
        ...state,
        mode: action.mode
      };
    default:
      return state;
  }
};