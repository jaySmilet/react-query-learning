import * as React from 'react';
import { useQuery } from 'react-query';
import { SuperHero } from '../models/models';

const fetchSuperHeroes = async () => {
  const res: Response = await fetch('http://localhost:3000/supeheroes');
  return await res.json();
};

const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error, isFetching } = useQuery(
    'super-heroes',
    fetchSuperHeroes,
    {
      cacheTime: 5000,
    }
  );
  console.log({ isLoading, isFetching });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <p>{(error as Error).message}</p>;
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Super Hero</th>
            <th>Fan Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value: SuperHero) => {
            return (
              <tr>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.alterEgo}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default RQSuperHeroesPage;
