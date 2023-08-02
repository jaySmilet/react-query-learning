import { useQuery } from 'react-query';

const fetchSuperHero = async (heroId: number) => {
  const res: Response = await fetch(
    `http://localhost:3000/supeheroes/${heroId}`
  );
  return await res.json();
};

export const useSuperHero = (heroId: number) => {
  return useQuery(['superHero', heroId], () => fetchSuperHero(heroId));
};
