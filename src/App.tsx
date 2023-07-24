import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home.page';
import Layout from './components/Layout';
import RQSuperHeroesPage from './components/RQSuperHeroes.page';
import SuperHeroesPage from './components/SuperHeroes.page';
import './style.css';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" component={<Layout />}>
            <Route index component={HomePage} />
            <Route path="/super-heroes" component={SuperHeroesPage} />
            <Route path="/rq-super-heroes" component={RQSuperHeroesPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
