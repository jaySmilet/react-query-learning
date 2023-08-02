import { useQuery } from 'react-query';
import { SuperHero } from '../models/models';

const fetchSuperHeroes = async () => {
  const res: Response = await fetch('http://localhost:3000/supeheroes');
  return await res.json();
};

export const useSuperHeroes = (onSuccess: () => void, onError: () => void) => {
  return useQuery('super-heroes', fetchSuperHeroes, {
    onSuccess,
    onError,
    select: (data: SuperHero[]) => data.map((hero) => hero.name),
  });
};
