/**
 * Dependencies
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Player } from '../store/player/types';
import { RootState } from '../store/reducers';

/**
 * Component
 */
const Header: React.FC = () => {
  const player: Player = useSelector((state: RootState) => state.player);

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Awesome Memory Game</h1>
          {useLocation().pathname === '/play' && player.name !== '' && (
            <h2 className="subtitle">
              <p>Player: {player.name} </p>
              <p>Score: {player.score} </p>
            </h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default Header;
