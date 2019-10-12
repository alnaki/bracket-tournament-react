export interface IDuel {
    id: number;
    idBDD?: number;
    teams: IDuelScoring[];
}

export interface IDuelScoring {
    winner: "noplay" | "true" | "false";
    score?: number;
}