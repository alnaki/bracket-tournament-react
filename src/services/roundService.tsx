import { IRound } from "../config/model"

export function round1(_roundNumber: number): IRound {
    return  ({
        id: "",
        name: "",
        roundNumber: _roundNumber,
        duelsId: []
    });
}

export function round2(_name: string, _roundNumber: number): IRound {
    return  ({
        id: "",
        name: _name,
        roundNumber: _roundNumber,
        duelsId: []
    });}