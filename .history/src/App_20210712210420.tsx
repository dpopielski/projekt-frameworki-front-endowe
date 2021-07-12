import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import TopBar from './components/TopBar';
import UserSideBar from './components/UserSideBar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Entites from 'pages/Entities';
import NotFound from './pages/404';
import Workspace from 'pages/Workspace';

export default function App() {
  return (
    <Router>
      <TopBar />
      <main className="flex flex-col w-11/12 mx-auto lg:w-4/5 xl:flex-row xl:m-0 xl:w-full">
        <aside className="flex-row hidden p-4 xl:flex xl:flex-col xl:w-1/6">
          <UserSideBar />
        </aside>
        <article className="flex flex-col gap-5 p-4 xl:w-5/6 xl:pr-24">
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
            <Route path="/workspace/:slug">
              <Workspace />
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
