/**
 * Dependencies
 */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Player } from '../store/player/types';
import { RootState } from '../store/reducers';
import { register, updateScore } from '../store/player/actions';

/**
 * Components
 */
import LeaderBoard from '../components/LeaderBoard';
import PlayerScore from '../components/PlayerScore';
import { STARTER_POINTS } from './Play/bootstrap';

/**
 * Component
 */
const Score: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const player: Player = useSelector((state: RootState) => state.player);

  const resetGame = () => {
    dispatch(register({ name: '' }));
    dispatch(updateScore({ score: STARTER_POINTS }));
    navigate('/');
  };

  React.useEffect(() => {
    // Redirect to home if player name not defined
    if (player.name === '') {
      navigate('/');
    }
  }, [navigate, player.name]);

  return (
    <>
      <PlayerScore />
      <LeaderBoard />
      <button type="button" className="button is-link" onClick={resetGame}>
        Restart
      </button>
    </>
  );
};

export default Score;
