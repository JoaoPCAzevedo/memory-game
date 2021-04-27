/**
 * Dependencies
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { Player } from '../store/player/types';
import { RootState } from '../store/reducers';

/**
 * Component
 */
const PlayerScore: React.FC = () => {
  const player: Player = useSelector((state: RootState) => state.player);

  return (
    <div className="tile is-ancestor">
      <div className="tile is-vertical is-8">
        <div className="tile">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child notification is-success">
              <p className="title">{player.name}, congratilations you won...</p>
              <p className="subtitle">Your score: {player.score}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerScore;
