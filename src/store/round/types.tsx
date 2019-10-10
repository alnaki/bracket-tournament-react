// Describing the shape of the chat's slice of state
export interface IRound {
  id: number;
  bddId?: number;
  name: String;
  avatar?: string;
}

export interface RoundState {
  roundList: IRound[];
  nbRound: number;
}

// Describing the different ACTION NAMES available
export const ADD_ROUND = "ADD_ROUND";
export const EDIT_ROUND = "EDIT_ROUND";
export const DELETE_ROUND = "DELETE_ROUND";

interface AddRound {
  type: typeof ADD_ROUND;
  round: IRound;
}
interface EditRound {
  type: typeof EDIT_ROUND;
  round: IRound;
}
interface DeleteRound {
  type: typeof DELETE_ROUND;
  bracketId: number;
}

export type RoundActionTypes = AddRound | EditRound | DeleteRound;
