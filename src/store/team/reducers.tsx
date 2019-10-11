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
  teams: [
    { id: 0, name: "team 1", playerList: [] },
    { id: 1, name: "group 2", playerList: [] }
  ],
  nbTeam: 2
};

export function teamReducer(
  state = initialState,
  action: TeamActionTypes
): TeamState {
  switch (action.type) {
    case ADD_TEAM:
      !action.team
        ? (action.team = {
            id: state.nbTeam,
            name: "Team " + state.nbTeam,
            playerList: []
          })
        : (action.team.id = state.nbTeam);
      return {
        nbTeam: state.nbTeam + 1,
        teams: [...state.teams, action.team]
      };
    case EDIT_TEAM:
      return {
        ...state,
        teams: [
          ...state.teams.map(team =>
            team.id === action.team.id ? action.team : team
          )
        ]
      };
    case DELETE_TEAM:
      return {
        ...state,
        teams: [...state.teams.filter(team => team.id !== action.bracketId)]
      };
    case ADD_PLAYER_IN_TEAM:
      const upTeam1 = state.teams.find(team => team.id === action.teamId);
      if (upTeam1 !== undefined) {
        upTeam1.playerList.push(action.playerId);
        return {
          ...state,
          teams: [
            ...state.teams.map(team =>
              team.id === action.teamId ? upTeam1 : team
            )
          ]
        };
      } else return state;

    case DELETE_PLAYER_IN_TEAM:
      const upTeam2 = state.teams.find(team => team.id === action.teamId);
      if (upTeam2 !== undefined) {
        upTeam2.playerList = upTeam2.playerList.filter(
          player => player === action.playerId
        );
        return {
          ...state,
          teams: [
            ...state.teams.map(team =>
              team.id === action.teamId ? upTeam2 : team
            )
          ]
        };
      } else return state;

    default:
      return state;
  }
}
