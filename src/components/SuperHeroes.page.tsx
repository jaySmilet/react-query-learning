import * as React from 'react';
import { SuperHero } from '../models/models';

const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<SuperHero[]>([]);
  const [error, setError] = React.useState<string>('');
  React.useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3000/supeheroes', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res: Response) => {
        if (res.status === 200) {
          res.json().then((v: SuperHero[]) => setData(v));
        } else {
          setError(res.statusText);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setError(err.message);
      });
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
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
              <tr key={value.id}>
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

export default SuperHeroesPage;
