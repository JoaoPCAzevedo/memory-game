/**
 * TIECs
 */
import { Leaderboard, Actions, UPDATE } from './types';
import mockedLeaderboardData from './mockedData';

/**
 * Reducer
 */
const initialState: Leaderboard[] | [] = mockedLeaderboardData;

const leaderboardReducer = (
  state = initialState,
  action: Actions
): Leaderboard[] => {
  switch (action.type) {
    case UPDATE:
      return action.payload;

    default:
      return state;
  }
};

export default leaderboardReducer;
