import { IRound } from "../config/model";
import uuid from "uuid/v4";

export function newRound(_roundNumber: number, _name?: string): IRound {
    return ({
        id: uuid(),
        name: _name ? _name : "Round " + _roundNumber,
        roundNumber: _roundNumber,
        duelsId: []
    });
}