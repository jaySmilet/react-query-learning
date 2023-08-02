import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useSuperHero } from '../hooks/useSuperHero';

export const SuperHero = () => {
  const { heroId } = useParams();
  const { isLoading, data, isError, error } = useSuperHero(heroId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{(error as Error).message}</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Super Hero</th>
        </tr>
      </thead>
      <tbody>
        <td>{data.id}</td>
        <td>{data.name}</td>
      </tbody>
    </table>
  );
};
