import { IRound, IDuel } from "../config/model";
import { ITeam } from "../config/model";
import { shuffle } from "./shuffle";


function nbMinDuelByNbTeam(nbTeam: number, nbTeamMaxByDuel: number): number {
    return Math.ceil(nbTeam / nbTeamMaxByDuel);
}

function nbMinRound(nbDuel: number) {
    let nbRound = Math.ceil(Math.log2(nbDuel));
    return nbRound;
}

function initEmptyBracket(nbDuel: number) {
    let nbRound = nbMinRound(nbDuel);
    let nbDuelLast = (nbDuel - Math.pow(2, nbRound)) * 2;
    let rounds: IRound[] = initEmptyRounds(nbRound);

    // if (nbDuelLast > 0) {
    //     rounds.push({ duels: Array(nbDuelLast).fill({ duels: [] }) });
    // }
    return rounds;
}

function initEmptyRounds(nbRounds: number) {
    let rounds: IRound[] = [];
    // for (let i = 0; i < nbRounds; i++) {
    //     let duelRound: IRound = { duels: [] };
    //     for (let j = 0; j < Math.pow(2, i); j++) {
    //         duelRound.duels.push({ duelsScore: [] });
    //     }
    //     rounds.push(duelRound);
    // }
    return rounds;
}

function listFirstDuels(nbDuel: number, teams: ITeam[]) {
    let random = shuffle<ITeam>(teams);
    let firstDuels: IDuel[] = [];
    // for (let i = 0; i < nbDuel; i++) {
    //     firstDuels.push({ duelsScore: [] });
    // }
    // random.forEach((t, i) =>
    //     firstDuels[i % nbDuel].duelsScore.push({ score: "X", team: t })
    // );
    return firstDuels;
}

function initTeamBracket(duels: IDuel[]): IRound[] {
    let rounds: IRound[] = [];
    // // if any duels to init
    // if (duels.length === 0) {
    //     rounds.push({ duels: [] });
    //     return rounds;
    // }

    // // init first empty rounds
    // let nbRound = nbMinRound(duels.length);
    // rounds = initEmptyRounds(nbRound);

    // // last round is full :)
    // if (Math.pow(2, nbRound) === duels.length) {
    //     rounds.push({ duels: duels });
    //     // last round is not complete :/
    // } else {
    //     duels.reverse(); // for duel alone
    //     let nbDuelLast = (duels.length - Math.pow(2, nbRound - 1)) * 2;
    //     let duelLast: IDuel[] = duels.slice(0, nbDuelLast).reverse();
    //     let duelFullInit: IDuel[] = duels.slice(nbDuelLast);
    //     let duelEmptyForFull: IDuel[] = Array(
    //         Math.pow(2, nbRound - 1) - duelFullInit.length
    //     ).fill({ duelsScore: [] });
    //     rounds.pop();
    //     rounds.push({ duels: [...duelEmptyForFull, ...duelFullInit] });
    //     rounds.push({ duels: [...duelLast] });
    // }

    return rounds;
}

export { nbMinDuelByNbTeam, initEmptyBracket, listFirstDuels, initTeamBracket };
