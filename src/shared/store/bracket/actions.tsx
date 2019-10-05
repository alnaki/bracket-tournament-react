import { BRACKET_MODE } from "./types";

export function changeMode(newMode: boolean) {
    return {
        type: BRACKET_MODE,
        mode: newMode
    }
};
