import {
  Link,
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from 'react-router-dom';

import styles from './App.css';

function RGB() {
  const { r, g, b } = useParams();

  return (
    <div
      className={styles.fill}
      style={{ background: `rgb(${r}, ${g}, ${b})` }}
    >
      <p>{`rgb(${r},${g},${b})`}</p>
    </div>
  );
}

function ScreenColor() {
  return (
    <div>
      <Switch>
        <Route path="/rgb/:r/:g/:b">
          <RGB />
        </Route>
      </Switch>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <header>
        <Route exact path="/">
          <Redirect to="/rgb/192/192/192" />
        </Route>

        <ul>
          <Link to="/rgb/192/192/192">Silver</Link>
          <Link to="/rgb/220/20/60">Crimson</Link>
          <Link to="/rgb/147/112/219">Purple</Link>
        </ul>
      </header>

      <ScreenColor />
    </Router>
  );
}
