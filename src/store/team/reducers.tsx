import { ITeam } from "../../config/model";
import { ADD_PLAYER_IN_TEAM, ADD_TEAM, DELETE_PLAYER_IN_TEAM, DELETE_TEAM, EDIT_TEAM, INIT_N_TEAM, TeamActionTypes, TeamState, CHANGE_TEAM_LIST } from "./types";
import uuid from "uuid/v4";

const initialState: TeamState = {
  teams: [
    { id: "1", name: "Click here to change name", playersId: [] },
    { id: "2", name: "Double click to say Winner", playersId: [] }
  ],
  nbTeam: 2
};

function initNumberTeam(nbTeam: number, state: TeamState): ITeam[] {
  let teams: ITeam[] = [];
  for (let i = state.teams.length; i < nbTeam; i++) {
    teams.push(initTeam())
  }
  return teams;
}

function initTeam(): ITeam {
  return {
    id: uuid(),
    name: "Team",
    playersId: []
  }
}

export function teamReducer(
  state = initialState,
  action: TeamActionTypes
): TeamState {
  switch (action.type) {
    case ADD_TEAM:
      return {
        nbTeam: state.nbTeam + 1,
        teams: [...state.teams, initTeam()]
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
    case INIT_N_TEAM:
      return {
        ...state,
        teams: [...state.teams, ...initNumberTeam(action.nbTeam, state)]
      }
    case ADD_PLAYER_IN_TEAM:
      const upTeam1 = state.teams.find(team => team.id === action.teamId);
      if (upTeam1 !== undefined) {
        upTeam1.playersId.push(action.playerId);
        return {
          ...state
        };
      } else return state;
    case DELETE_PLAYER_IN_TEAM:
      const upTeam2 = state.teams.find(team => team.id === action.teamId);
      if (upTeam2 !== undefined) {
        upTeam2.playersId = upTeam2.playersId.filter(
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
    case CHANGE_TEAM_LIST:
      return {
        ...state,
        teams: action.teams
      }
    default:
      return state;
  }
}