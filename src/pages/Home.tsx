/**
 * Dependencies
 */
import React from 'react';

/**
 * Components
 */
import LeaderBoard from '../components/LeaderBoard';
import UserInput from '../components/UserInput';

/**
 * Component
 */
const Home: React.FC = () => {
  return (
    <>
      <UserInput />
      <LeaderBoard />
    </>
  );
};

export default Home;
