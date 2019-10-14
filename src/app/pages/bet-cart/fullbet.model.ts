export interface FullBet {
    id: number;
    teamA: string;
    teamB: string;
    oddA: number;
    oddB: number;
    oddN: number;
    gameId: number;
    gametime: string;
    amount: number;
    combinedAmount: number;
    savedtime: string;
    betChoice: string;
    ownerId: number;
}
