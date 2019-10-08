import {
  PlayerActionTypes,
  PlayerState,
  ADD_PLAYER,
  EDIT_PLAYER,
  DELETE_PLAYER
} from "./types";

const initialState: PlayerState = {
  playerList: [],
  nbPlayer: 0
};

export function playerReducer(
  state = initialState,
  action: PlayerActionTypes
): PlayerState {
  switch (action.type) {
    case ADD_PLAYER:
      action.player.id = state.nbPlayer;
      return {
        nbPlayer: state.nbPlayer++,
        playerList: [...state.playerList, action.player]
      };
    case EDIT_PLAYER:
      return {
        ...state,
        playerList: [
          ...state.playerList.map(player =>
            player.id === action.player.id ? action.player : player
          )
        ]
      };
    case DELETE_PLAYER:
      return {
        ...state,
        playerList: [
          ...state.playerList.filter(player => player.id !== action.bracketId)
        ]
      };
    default:
      return state;
  }
}
