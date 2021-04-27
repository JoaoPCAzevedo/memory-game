/**
 * Dependencies
 */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { updateScore } from '../../store/player/actions';
import updateLeaderboard from '../../store/leaderboard/actions';
import { Player } from '../../store/player/types';
import { Leaderboard } from '../../store/leaderboard/types';
import { RootState } from '../../store/reducers';
import useConstructor from '../../hooks';

/**
 * StyledComponents
 */
import { Front, Back, Card, Tile as STile } from './styles';

/**
 * Starter
 */
import { Tile, buildGame, PENALTY } from './bootstrap';

const Play: React.FC = () => {
  const dispatch = useDispatch();
  const player: Player = useSelector((state: RootState) => state.player);
  const leaderboard: Leaderboard[] = useSelector(
    (state: RootState) => state.leaderboard
  );
  const [firstCard, setFirstCard] = React.useState<number>(-1);
  const [secondCard, setSecondCard] = React.useState<number>(-1);
  const [tiles, setTiles] = React.useState<Tile[]>([]);
  const [pairsCount, setPairsCount] = React.useState<number>(0);
  const navigate = useNavigate();

  useConstructor(() => {
    setTiles(buildGame());
  });

  const resetSelectedCards = () => {
    setFirstCard(-1);
    setSecondCard(-1);
  };

  const selectTile = (id: number) => {
    if (firstCard < 0) {
      setFirstCard(id);
    } else if (secondCard < 0) {
      setSecondCard(id);
      if (tiles[firstCard].label !== tiles[id].label) {
        setTimeout(() => {
          resetSelectedCards();
          if (player.score > 0) {
            dispatch(updateScore({ score: player.score - PENALTY }));
          }
        }, 500);
      } else {
        const tilesCopy = [...tiles];
        tilesCopy[firstCard].isFlipped = true;
        tilesCopy[id].isFlipped = true;
        setTiles(tilesCopy);
        setPairsCount(pairsCount + 1);
        resetSelectedCards();
      }
    }
  };

  const playerWon = React.useCallback(() => {
    const leaderboardCopy = [...leaderboard];
    for (let index = 0; index < leaderboardCopy.length; index += 1) {
      if (player.score >= leaderboard[index].points) {
        leaderboardCopy.splice(index, 0, {
          player: player.name,
          points: player.score,
          date: moment().format('DD-MM-YYYY, h:mm:ss a'),
        });
        break;
      }
    }
    dispatch(updateLeaderboard(leaderboardCopy.slice(0, 10)));
    navigate('/score');
  }, []);

  React.useEffect(() => {
    // Redirect to home if player name not defined
    if (player.name === '') {
      navigate('/');
    }
    // If player win
    if (pairsCount === tiles.length / 2) {
      playerWon();
    }
  }, [navigate, pairsCount, player.name, playerWon, tiles.length]);

  return (
    <div className="columns is-multiline">
      {tiles.map((eachTile) => {
        const { id, isFlipped, label } = eachTile;
        const showFront = isFlipped || id === firstCard || id === secondCard;
        return (
          <STile
            key={id}
            className={`column is-2 ${showFront && `is-flipped`}`}
            onClick={() => selectTile(id)}
          >
            <Card className="box">
              <Back>🃏</Back>
              <Front>{label}</Front>
            </Card>
          </STile>
        );
      })}
    </div>
  );
};

export default Play;
