/**
 * Actions types
 */
export const REGISTER = 'REGISTER';
export const UPDATE_SCORE = 'UPDATE_SCORE';

export interface Player {
  name: string;
  score: number;
}

interface RegisterPlayerAction {
  type: typeof REGISTER;
  payload: Pick<Player, 'name'>;
}

interface UpdatePlayerScoreAction {
  type: typeof UPDATE_SCORE;
  payload: Pick<Player, 'score'>;
}

export type Actions = RegisterPlayerAction | UpdatePlayerScoreAction;
