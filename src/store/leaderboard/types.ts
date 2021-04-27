/**
 * Actions types
 */
export const UPDATE = 'UPDATE';

export interface Leaderboard {
  player: string;
  points: number;
  date: string;
}

interface UpdateLeaderboardAction {
  type: typeof UPDATE;
  payload: Leaderboard[];
}

export type Actions = UpdateLeaderboardAction;
