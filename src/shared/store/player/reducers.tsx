import { PlayerActionTypes, IPlayer, PlayerState, GET_PLAYER, CREATE_PLAYER, MODIFY_PLAYER, DELETE_PLAYER } from "./types";

const initialState: PlayerState = {
  playerList: [],
  nbPlayer: 0
};

export function bracketReducer(
  state = initialState,
  action: PlayerActionTypes): PlayerState {
  switch (action.type) {
    case GET_PLAYER:
      return {
        ...state,
      };
    case CREATE_PLAYER:
      action.player.bracketId = state.nbPlayer;
      return {
        nbPlayer: state.nbPlayer++,
        playerList: [...state.playerList, action.player]
      };
    case MODIFY_PLAYER:
      const oldPlayer = state.playerList.find(p => p.bracketId === action.player.bracketId);
      return {
        ...state,
        playerList: [...state.playerList, action.player]
      };
    case DELETE_PLAYER:
      return {
        ...state,
        mode: action.mode
      };
    default:
      return state;
  }
};