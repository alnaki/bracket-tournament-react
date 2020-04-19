import { IDuel } from "../config/model";

export function findById(id: string, store: IDuel[]):IDuel {

    let result = store.find(obj => obj.id === id);
    if (result === undefined) throw new Error("The duel with id " + id + " is unknow");
    
    return result;
}