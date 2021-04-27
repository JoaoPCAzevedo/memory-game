/**
 * Dependencies
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { Leaderboard } from '../store/leaderboard/types';
import { RootState } from '../store/reducers';

/**
 * Component
 */
const LeaderBoard: React.FC = () => {
  const leaderboard: Leaderboard[] = useSelector(
    (state: RootState) => state.leaderboard
  );

  return (
    <table className="table">
      <thead>
        <tr>
          <th>
            <abbr title="Position">Position</abbr>
          </th>
          <th>Player</th>
          <th>
            <abbr title="Points">Points</abbr>
          </th>
          <th>
            <abbr title="Date">Date</abbr>
          </th>
        </tr>
      </thead>
      <tbody>
        {leaderboard.map((eachLeader, i) => (
          <tr key={eachLeader.date}>
            <th>{i + 1}</th>
            <td>{eachLeader.player}</td>
            <td>{eachLeader.points}</td>
            <td>{eachLeader.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeaderBoard;
