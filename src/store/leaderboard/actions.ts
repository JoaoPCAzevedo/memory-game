/**
 * TIECs
 */
import { Leaderboard, Actions, UPDATE } from './types';

/**
 * Action
 */
const update = (payload: Leaderboard[]): Actions => ({
  type: UPDATE,
  payload,
});

export default update;
