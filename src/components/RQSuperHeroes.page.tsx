import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSuperHeroes } from '../hooks/useSuperHeroes';
import { SuperHero } from '../models/models';

const RQSuperHeroesPage = () => {
  const onSuccess = () => {
    console.log(`show popup on success`);
  };

  const onError = () => {
    console.log(`show error on error`);
  };

  const { isLoading, data, isError, error, isFetching } = useSuperHeroes(
    onSuccess,
    onError
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
              <tr key={Math.round(value.id)}>
                <td>{value.id}</td>
                <td>
                  <Link to={`/super-hero/${value.id}`}>{value.name}</Link>
                </td>
                <td>{value.alterEgo}</td>
              </tr>
            );
          })}
          {/* {data.map((value, index) => {
            return (
              <tr key={Math.round(index)}>
                <td>1</td>
                <td>{value}</td>
                <td>1</td>
              </tr>
            );
          })} */}
        </tbody>
      </table>
    </>
  );
};

export default RQSuperHeroesPage;
