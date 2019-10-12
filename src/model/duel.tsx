import { ITeam } from "../store/team/types";

export interface IDuel {
    scoring: IDuelScoring[];
}

export interface IDuelScoring {
    team: ITeam;
    winner: "noplay" | "true" | "false";
    score?: number;
}

export class Duel implements IDuel {
    scoring: IDuelScoring[] = [];
    constructor(team: ITeam) {
        this.scoring = [new DuelScoring(team)];
    }
}

export class DuelScoring implements IDuelScoring {
    team: ITeam;
    winner: "noplay" | "true" | "false";
    score?: number | undefined;
    constructor(team: ITeam) {
        this.team = team;
        this.winner =  "noplay";
    }
}