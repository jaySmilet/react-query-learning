import * as React from 'react';
import { useQuery } from 'react-query';
import { SuperHero } from '../models/models';

const RQSuperHeroesPage = () => {
  const { isLoading, data } = useQuery('super-heroes', () =>
    fetch('http://localhost:3000/supeheroes').then((res) => res.json())
  );
  if (isLoading) {
    return <div>Loading...</div>;
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
