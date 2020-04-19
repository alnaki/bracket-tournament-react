import { ITeam } from "../config/model";

export function findById(id: string, store: ITeam[]):ITeam {

    let result = store.find(obj => obj.id === id);
    if (result === undefined) throw new Error("The team with id " + id + " is unknow");
    
    return result;
}