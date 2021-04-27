/**
 * Dependencies
 */
import { combineReducers } from 'redux';

/**
 * Reducers
 */
import leaderboardReducer from './leaderboard/reducer';
import playerReducer from './player/reducer';

const reducers = combineReducers({
  leaderboard: leaderboardReducer,
  player: playerReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
