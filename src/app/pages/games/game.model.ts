export interface Game {
  id: number;
  teamA: string;
  teamB: string;
  oddA: number;
  oddB: number;
  oddN: number;
  datetime: string;
  checked?:boolean;
}
