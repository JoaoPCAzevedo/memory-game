/**
 * TIECs
 */
import { Player, Actions, REGISTER, UPDATE_SCORE } from './types';

/**
 * Action
 */
export const register = (payload: Pick<Player, 'name'>): Actions => ({
  type: REGISTER,
  payload,
});

export const updateScore = (payload: Pick<Player, 'score'>): Actions => ({
  type: UPDATE_SCORE,
  payload,
});
