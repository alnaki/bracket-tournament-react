// Describing the shape of the chat's slice of state
export interface IBracket {
    mode: boolean;
}

// Describing the different ACTION NAMES available
export const BRACKET_MODE = "BRACKET_MODE"

interface ChangeBracketMode {
    type: typeof BRACKET_MODE;
    mode: boolean;
}

export type BracketActionTypes = ChangeBracketMode;
