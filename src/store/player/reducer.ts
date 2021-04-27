/**
 * TIECs
 */
import { Player, Actions, REGISTER, UPDATE_SCORE } from './types';
import { STARTER_POINTS } from '../../pages/Play/bootstrap';

/**
 * Reducer
 */
const initialState: Player = {
  name: '',
  score: STARTER_POINTS,
};

const playerReducer = (state = initialState, action: Actions): Player => {
  switch (action.type) {
    case REGISTER:
      return { ...state, ...action.payload };
    case UPDATE_SCORE:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default playerReducer;
