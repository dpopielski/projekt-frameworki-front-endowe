import React, { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import TopBar from './components/TopBar/TopBar';
import UserSideBar from './components/UserSideBar/UserSideBar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import NotFound from './pages/404';
import Entites from 'pages/Entities';

export default function App() {
  return (
    <Router>
      <TopBar />
      <main className="flex flex-col mx-auto w-11/12 lg:w-4/5 xl:flex-row xl:m-0 xl:w-full">
        <aside className="hidden xl:flex flex-row xl:flex-col xl:w-1/6 p-4">
          <UserSideBar />
        </aside>
        <article className="p-4 flex gap-5 flex-col xl:w-5/6 xl:pr-24">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/entities">
              <Entites />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </article>
      </main>
    </Router>
  );
}
