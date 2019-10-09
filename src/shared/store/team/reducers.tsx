import {
  TeamActionTypes,
  TeamState,
  ADD_TEAM,
  EDIT_TEAM,
  DELETE_TEAM,
  ADD_PLAYER_IN_TEAM,
  DELETE_PLAYER_IN_TEAM
} from "./types";

const initialState: TeamState = {
  teamList: [{ id: 1, name: "team 1" }, { id: 2, name: "group 2" }],
  nbTeam: 0
};

export function teamReducer(
  state = initialState,
  action: TeamActionTypes
): TeamState {
  switch (action.type) {
    case ADD_TEAM:
      action.team.id = state.nbTeam;
      return {
        nbTeam: state.nbTeam++,
        teamList: [...state.teamList, action.team]
      };
    case EDIT_TEAM:
      return {
        ...state,
        teamList: [
          ...state.teamList.map(team =>
            team.id === action.team.id ? action.team : team
          )
        ]
      };
    case DELETE_TEAM:
      return {
        ...state,
        teamList: [
          ...state.teamList.filter(team => team.id !== action.bracketId)
        ]
      };
    case ADD_PLAYER_IN_TEAM:
      const upTeam1 = state.teamList.find(team => team.id === action.teamId);
      if (upTeam1 !== undefined) {
        upTeam1.playerList.push(action.playerId);
        return {
          ...state,
          teamList: [
            ...state.teamList.map(team =>
              team.id === action.teamId ? upTeam1 : team
            )
          ]
        };
      } else return state;

    case DELETE_PLAYER_IN_TEAM:
      const upTeam2 = state.teamList.find(team => team.id === action.teamId);
      if (upTeam2 !== undefined) {
        upTeam2.playerList = upTeam2.playerList.filter(
          player => player === action.playerId
        );
        return {
          ...state,
          teamList: [
            ...state.teamList.map(team =>
              team.id === action.teamId ? upTeam2 : team
            )
          ]
        };
      } else return state;

    default:
      return state;
  }
}
