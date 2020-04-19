import { IDuel } from "../../config/model"

// Describing the shape of the chat's slice of state
export interface DuelState {
    duelList: IDuel[];
  }

// Describing the different ACTION NAMES available
export const ADD_DUEL = "ADD_DUEL";
export const EDIT_DUEL = "EDIT_DUEL";
export const DELETE_DUEL = "DELETE_DUEL";

interface AddDuel {
 type: typeof ADD_DUEL;
 duel: IDuel;
}
interface EditDuel {
 type: typeof EDIT_DUEL;
 duel: IDuel;
}
interface DeleteDuel {
 type: typeof DELETE_DUEL;
 duelId: string;
}

export type DuelActionTypes = AddDuel | EditDuel | DeleteDuel;