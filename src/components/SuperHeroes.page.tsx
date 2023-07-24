import * as React from 'react';
import { SuperHero } from '../models/models';

const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<SuperHero[]>([]);
  React.useEffect(() => {
    fetch(
      'https://stackblitzstarters59zzjg-ssec--3000--bec01ace.local-corp.webcontainer.io/supeheroes',
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>SuperHeroesPage</div>;
};

export default SuperHeroesPage;
