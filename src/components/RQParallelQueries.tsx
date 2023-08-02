import * as React from 'react';
import { useQuery } from 'react-query';

const fetchSuperHeroes = async () => {
  const res: Response = await fetch('http://localhost:3000/supeheroes');
  return await res.json();
};

const fetchFriends = async () => {
  const res: Response = await fetch('http://localhost:3000/friends');
  return await res.json();
};

const ParallelQueries = () => {
  useQuery('super-heroes', fetchSuperHeroes);
  useQuery('friends', fetchFriends);
  return <div>ParallelQueries</div>;
};

export default ParallelQueries;
